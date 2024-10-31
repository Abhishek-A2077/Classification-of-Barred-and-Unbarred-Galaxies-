"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload"; // Adjust the path as needed

export function FileUploadDemo() {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [predictedClass, setPredictedClass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (files) => {
    const uploadedFile = files[0];
    setFile(uploadedFile);
    setFilePreview(URL.createObjectURL(uploadedFile)); // Create image preview URL
  };

  const handleUploadClick = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setIsLoading(true); // Start loading spinner

    try {
      const response = await fetch("http://localhost:5000/classify", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setPredictedClass(data.predicted_class);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black p-6 rounded-lg shadow-lg text-white mb-10">
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-black border-neutral-800 rounded-lg">
        <FileUpload onChange={handleFileUpload} />
      </div>

      {filePreview && (
        <div className="mt-6 text-center">
          <p className="text-lg font-medium mb-2">Image Preview:</p>
          <img
            src={filePreview}
            alt="Image Preview"
            className="max-w-xs mx-auto rounded-lg shadow-lg border border-gray-700"
          />
        </div>
      )}

      <div className="text-center mt-6">
        <button
          onClick={handleUploadClick}
          className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-200"
          disabled={!file || isLoading}
        >
          {isLoading ? "Classifying..." : "Upload and Classify"}
        </button>
      </div>

      {isLoading && (
        <div className="flex justify-center mt-6">
          <div className="w-8 h-8 border-4 border-black border-dotted rounded-full animate-spin"></div>
        </div>
      )}

      {predictedClass && !isLoading && (
        <div className="mt-6 text-center">
          <p className="text-2xl font-semibold">
            Predicted Class:{" "}
            <span className="text-white">{predictedClass}</span>
          </p>
        </div>
      )}
    </div>
  );
}
