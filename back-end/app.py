import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.preprocessing import image
import os

# Load the saved model (ResNet)
model = load_model(r'D:\ML-SDSS-DATASET\back-end\best_resnet_model2.keras')

# Define the path to the test image (change as needed)
test_image_path = r'D:\ML-SDSS-DATASET\back-end\Test\5\image_7_class_5.jpg'


# Define image size expected by the model
img_height, img_width = 224, 224

# Load and preprocess the test image
img = image.load_img(test_image_path, target_size=(img_height, img_width))
img_array = image.img_to_array(img)
img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
img_array /= 255.0  # Normalize pixel values to [0, 1]

# Make prediction
prediction = model.predict(img_array)
predicted_class = np.argmax(prediction, axis=1)

# Define class labels
class_labels = ['Class 5', 'Class 6', 'Class 7']

# Get the predicted class label
predicted_label = class_labels[predicted_class[0]]
print(f'Predicted Class: {predicted_label}')

# Display the test image with the predicted class label
plt.imshow(img)
plt.title(f'Predicted Class: {predicted_label}')
plt.axis('off')
plt.show()