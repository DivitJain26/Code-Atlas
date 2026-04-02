export const exp2 = {
  id: 2,
  title: "Create Docker Image for Hello World Web App",
  co: "CO1",
  aim: "To create a Docker image for a simple web application.",
  theory:
    "A Docker image is a lightweight, standalone package that contains everything needed to run an application.",
  procedure: [
    "Create a simple HTML file",
    "Write a Dockerfile",
    "Use nginx base image",
    "Build image using: docker build -t hello-app .",
    "Run container using docker run -p 8080:80 hello-app",
  ],
  result: "Web app displays 'Hello World' in browser.",

  image: "src/assets/docker-run.png"

};