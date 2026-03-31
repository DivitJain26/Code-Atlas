export const experimentData = [
  {
    topic: "Docker Experiments",
    questions: [
      {
        id: 1,
        title: "Install Docker and Verify Installation",
        co: "CO1",
        aim: "To install Docker on the system and verify its installation.",
        theory:
          "Docker is a containerization platform that allows developers to package applications with all dependencies into a standardized unit called a container.",
        procedure: [
          "Download Docker Desktop from official website",
          "Install Docker and restart system",
          "Open terminal or command prompt",
          "Run command: docker --version",
          "Run command: docker run hello-world",
        ],
        result: "Docker installed successfully and hello-world container runs.",
      },

      {
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
      },

      {
        id: 3,
        title: "Run Docker Container",
        co: "CO1",
        aim: "To run a container from an existing Docker image.",
        theory:
          "Containers are instances of Docker images that run applications in isolated environments.",
        procedure: [
          "Pull image using docker pull hello-world",
          "Run container using docker run hello-world",
          "Check running containers using docker ps",
        ],
        result: "Container runs successfully and outputs confirmation.",
      },

      {
        id: 4,
        title: "Build Microservice for Sum of Two Numbers",
        co: "CO2",
        aim: "To build a microservice that calculates sum of two numbers.",
        theory:
          "Microservices architecture divides applications into small independent services.",
        procedure: [
          "Create a simple API using Node.js or Python",
          "Accept two inputs",
          "Return sum as response",
          "Dockerize the application",
        ],
        result: "Microservice returns correct sum.",
      },

      {
        id: 5,
        title: "Create Two Containers (Client + Server)",
        co: "CO2",
        aim: "To create two containers and enable communication.",
        theory:
          "Docker allows multiple containers to communicate via networks.",
        procedure: [
          "Create microservice container",
          "Create client container",
          "Connect both using Docker network",
          "Send request from client to server",
        ],
        result: "Client successfully communicates with microservice.",
      },

      {
        id: 6,
        title: "Scale Microservice",
        co: "CO3",
        aim: "To scale containers based on load.",
        theory:
          "Scaling increases the number of container instances to handle more traffic.",
        procedure: [
          "Use docker-compose",
          "Scale service using --scale option",
          "Monitor performance",
        ],
        result: "Application handles multiple requests efficiently.",
      },

      {
        id: 7,
        title: "Monitor using Prometheus and Grafana",
        co: "CO3",
        aim: "To monitor container performance.",
        theory:
          "Prometheus collects metrics and Grafana visualizes them.",
        procedure: [
          "Install Prometheus",
          "Install Grafana",
          "Connect Docker metrics",
          "Create dashboards",
        ],
        result: "Metrics are visualized in Grafana dashboard.",
      },
    ],
  },
];