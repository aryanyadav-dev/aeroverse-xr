# Aeroverse XR

Transforming the way we explore the sky. Aeroverse XR is dedicated to revolutionizing aerospace technology education and exploration through immersive Augmented Reality (AR) experiences.

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/989eb741-9c87-40fb-a20b-1ead60d6b2fd" />

## Overview

Aeroverse XR is a web-based platform designed to make learning about complex aerospace technologies accessible and engaging. Users can explore detailed 3D models of aerospace components in AR, get instant AI-powered explanations, and even collaborate with others in real-time. The project aims to bridge the gap between theoretical knowledge and practical understanding in the aerospace domain, catering to students, educators, and enthusiasts alike.

## Related Repositories

- [AeroVerse-XR](https://github.com/Chinmay-HS/AeroVerse-XR) – Augmented Reality (AR) application for AeroVerse.
- [AeroVerse-XR-Headsets](https://github.com/Chinmay-HS/AeroVerse-XR-Headsets) – Virtual Reality (VR) application tailored for headsets.


## Key Features

*   **Immersive AR Exploration**: Scan and explore detailed 3D models of aerospace components (like the James Webb Space Telescope, Starlink satellites, Curiosity Rover, and Turbofan Engines) in your real-world environment.
*   **Instant AI Explanations**: Tap on any part of a 3D model to receive concise, technical explanations about its function, materials, and operation, powered by the Gemini API.
*   **Real-Time Multilingual Translation**: On-device, real-time translation of spoken instructions and on-screen AR labels into the user's preferred language using ML Kit.
*   **Collaborative Learning**: Multiple users can join the same AR session to interact with components and receive synchronized explanations and translations.
*   **Educational Content**: Provides detailed information and visual aids that surpass traditional textbook diagrams.
*   **Cross-Platform Access**: Support for Android (9.0+) smartphones and tablets, with a trial demo for iOS & iPadOS. VR headset support (tested on Meta Quest 3) for immersive VR features.

## Sections of the Website

The Aeroverse XR website is structured into several informative sections:

*   **Hero Section**: Introduces the project with a captivating title, a brief about revolutionizing aerospace education, and a call-to-action to download the app.
*   **How It Works**: Details the four-step process of using Aeroverse XR:
    1.  Scan & Explore in AR
    2.  Instant AI Explanations
    3.  Real-Time Multilingual Translation
    4.  Collaborative Learning & Feedback
*   **Components We Offer**: A carousel showcasing various aerospace components available for exploration, including:
    *   James Webb Telescope
    *   Starlink
    *   Curiosity Rover
    *   Turbofan Engine
*   **Meet Our Team**: Introduces the development team behind Aeroverse XR, highlighting their expertise and providing links to their social profiles.
*   **Research**: Features academic publications related to the project, such as "Real Time Aerospace Simulation in Spatial Computing."
*   **FAQ (Frequently Asked Questions)**: Addresses common questions regarding device support, hardware requirements, classroom suitability, model accuracy, offline usage, and enterprise solutions.
*   **Contact Us**: Provides a way to get in touch with the team, linking to PixelLabs.ai.
*   **Download Page**: Provides links/QR codes to download the application.

## Technology Stack

Aeroverse XR is built with a modern technology stack:

*   **Frontend**: Next.js, React, TypeScript
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Key APIs/Services**:
    *   Gemini API (for AI explanations)
    *   ML Kit (for real-time translation - planned or implied by description)
*   **Deployment**: Assumed to be Vercel or similar Next.js hosting.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd aeroverse-xr
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Available Scripts

In the project directory, you can run:

*   `npm run dev` or `yarn dev`:
    Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

*   `npm run build` or `yarn build`:
    Builds the app for production to the `.next` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

*   `npm run start` or `yarn start`:
    Starts the production server. This command should be run after building the application with `npm run build`.

*   `npm run lint` or `yarn lint`:
    Runs the linter to check for code quality and style issues.

## The Team

Aeroverse XR is developed by a passionate team of individuals with expertise in software development, AR/VR, immersive technologies, and educational technology. More details about the team can be found in the "Meet Our Team" section of the website.

