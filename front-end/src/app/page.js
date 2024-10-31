"use client";
import React from "react";
import { FileUploadDemo } from "../comp/file-upload";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <h1 className="text-4xl font-bold mb-8 mt-4   p-4 rounded-lg">
        Classification of Bars in Galaxy
      </h1>
      <FileUploadDemo />
    </div>
  );
}
