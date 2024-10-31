# Galaxy Classification: Barred and Unbarred Galaxies

This project classifies barred and unbarred galaxies using deep learning models. Leveraging the Galaxy10 SDSS dataset, we categorize galaxies into three specific classes: Barred Spiral, Unbarred Tight Spiral, and Unbarred Loose Spiral. The models implemented include VGG16 and ResNet50, achieving notable accuracy results.

## Overview

The project uses the **Galaxy10 SDSS** dataset to classify galaxies into three types:
- **Class 5:** Barred Spiral Galaxies
- **Class 6:** Unbarred Tight Spiral Galaxies
- **Class 7:** Unbarred Loose Spiral Galaxies

These classes help distinguish between barred and unbarred galaxies for our classification tasks.

## Dataset

The Galaxy10 SDSS dataset comprises images of ten galaxy classes, but only three are used for our classification task. The dataset's galaxy labels are:
0. Disturbed Galaxies  
1. Merging Galaxies  
2. Round Smooth Galaxies  
3. In-between Round Smooth Galaxies  
4. Cigar Shaped Smooth Galaxies  
5. Barred Spiral Galaxies  
6. Unbarred Tight Spiral Galaxies  
7. Unbarred Loose Spiral Galaxies  
8. Edge-on Galaxies without Bulge  
9. Edge-on Galaxies with Bulge  

## Model Architecture

Two CNN models were implemented for galaxy classification:

### VGG16
- **Accuracy:** 87%
- VGG16, a convolutional neural network with a 16-layer architecture, was applied to classify galaxy types, reaching an accuracy of 87%.

### ResNet50
- **Accuracy:** 92.8%
- ResNet50, a 50-layer deep residual network, achieved 92.8% accuracy. This model significantly improved the classification performance.

## Results

| Model    | Accuracy |
|----------|----------|
| VGG16    | 87%      |
| ResNet50 | 92.8%    |

## Setup

To set up and run the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/galaxy-classification.git
   cd galaxy-classification
