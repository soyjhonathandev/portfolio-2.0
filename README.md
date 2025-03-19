# Personal Full Stack Developer Portfolio

Welcome to my personal full stack developer portfolio. This project showcases my skills and projects as a full stack developer.

## Table of Contents
- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
        - [Development Mode](#development-mode)
        - [Test-Production Mode](#test-production-mode)
- [Contact](#contact)

## About the Project

This portfolio is designed to highlight my experience and projects in full stack development. It includes various sections such as my bio, skills, projects, and contact information.

## Tech Stack

The project is built using the following technologies:

- **Stack:**
    - Next.js (v15.1.6)
    - Tailwind CSS (v3.1.8)
    - Typescript (v5.7.3")


- **Containerization:**
    - Docker (v20.10.12)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed on your machine:
- Docker
- Docker Compose

### Installation

1. Clone the repository:
     ```sh
     git clone https://github.com/yourusername/portfolio-2.0.git
     ```
2. Navigate to the project directory:
     ```sh
     cd portfolio-2.0
     ```

### Running the Project

#### Development Mode

To run the project in development mode with hot-reloading:

1. Build and start the containers:
     ```sh
     docker-compose -f docker-compose.yml up --build
     ```
2. Open your browser and navigate to `http://localhost:3001`.

#### Test-Production Mode

To run the project in a test-production environment:

1. Build and start the containers:
     ```sh
     docker-compose -f docker-compose.front-testing.yml up --build
     ```
2. Open your browser and navigate to `http://localhost:80`.

## Contact

Feel free to reach out to me via [Mail](mailto:soyjhonathandev@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/jhonathan-saldarriaga-1a9181202/).

Thank you for visiting my portfolio!