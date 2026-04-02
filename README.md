# Code-Atlas  
**Docker-Based Online Coding Platform & Code Execution System**

---

## Overview

**Code-Atlas** is a containerized academic coding platform designed to provide students with a secure and consistent environment for performing CBAD laboratory assignments. The platform delivers theoretical explanations, guided practical steps, and an integrated browser-based code editor, enabling students to write and execute programs directly within the system.

All code execution occurs inside isolated Docker containers preconfigured with the required compiler and runtime environment. This architecture ensures environment consistency across users, secure execution, and controlled resource usage.

---

## Problem Statement

Traditional programming lab setups often suffer from inconsistent system configurations, dependency conflicts, and security risks when executing untrusted student code. Students may face environment-specific errors unrelated to the learning objectives, while instructors struggle to maintain uniform lab infrastructure.

The platform addresses these challenges by providing a containerized academic system that allows students to access CBAD lab assignments through a graphical interface. Each practical includes theory, step-by-step explanation, and an integrated code editor. When a student executes code, it runs inside an isolated Docker container containing the required compiler and runtime environment, ensuring secure execution, resource control, and consistency across all users.

---

## Project Objective

The objective of Code-Atlas is to develop a secure, containerized online coding platform using:

- **React** and **Monaco Editor** for the frontend interface and in-browser coding experience  
- **Docker** for isolated code execution environments  

The system ensures that every user executes code inside a controlled Docker container, maintaining consistency, security, and resource management across the platform.

---

## Current Development Status

The project is in the initial implementation phase. The following components are currently completed:

- Frontend user interface for the coding platform  
- Integrated Monaco-based code editor UI  
- Base Dockerfile for containerized execution environment  

Planned next phases include backend service integration, container orchestration, and secure execution APIs.

---

## How to Contribute

Contributions are welcome. Follow the steps below to fork the repository and set up the project locally using Visual Studio Code.

### 1. Fork the Repository

1. Open the main repository page on GitHub  
2. Click the **Fork** button in the top-right corner  
3. Select your GitHub account as the destination  

This creates your own copy of the repository.

---

### 2. Clone the Fork in VS Code

1. Open **Visual Studio Code**  
2. Navigate to the folder where you would like to clone this project
3. On the navigation panel, click **Terminal -> New Terminal**.
4. in the terminal type the following commands

```bash
git clone https://github.com/<your-username>/Code-Atlas.git
cd Code-Atlas
code .
```
After cloning, add the main repository as upstream to keep your fork updated:

```bash
git remote add upstream https://github.com/DivitJain26/Code-Atlas.git
```
---
### 3. Install Dependencies

After cloning the repository, install the required Node.js packages:

```bash
npm install
```

This will install all frontend dependencies defined in `package.json`.

---

### 4. Run the Development Server

Start the local development environment:

```bash
npm run dev
```

The application will start in development mode and can be accessed via the local server URL shown in the terminal (commonly `http://localhost:5173` for Vite-based React apps).

---

### 5. Make Changes and Commit

After implementing your improvement:

```bash
git add .
git commit -m "Add: brief description of change"
```

Before pushing, pull the latest updates from the main repository to avoid conflicts:

```bash
git pull upstream main
```

Then push your branch:

```bash
git push origin branch-name
```
or

```bash
git push origin main
```

---

### 6. Open a Pull Request

1. Go to your fork on GitHub  
2. Click **Compare & Pull Request**  
3. Provide a clear description of your changes  
4. Submit the pull request  

---

## Backend Integration

Backend architecture and API integration instructions are documented in:

**`Code-Atlas/API_INTEGRATION.md`**

Refer to this guide for details on connecting the frontend editor with Docker-based code execution services.

---

## License

This project is intended for academic use. Licensing details will be defined in future releases.

---

**Code-Atlas — Containerized Learning, Consistent Execution**
