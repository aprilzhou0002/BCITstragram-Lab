# BCITstragram-Lab
This project is a simple Node.js application designed to mimic basic functionalities of Instagram's photo filters. For the scope of this lab, we focus on the "Inkwell" filter, which converts images to grayscale.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone [Your Repository URL]

2. Navigate to the project directory:
   ```bash
   cd [Your Project Directory]
3. Install the required npm packages:
   ```bash
   npm install

## Usage

1. Place your `myfile.zip` file containing images in the project directory.
2. Run the application:
   ```bash
   node main.js
3. Decompressed images will be saved in the `unzipped` directory.
4. Processed images will be saved in the `grayscaled` directory.

## Features

- **Unzip Functionality:** Extracts images from a provided .zip file.
- **Grayscale Filter:** Converts each image to grayscale using the simple averaging method.
