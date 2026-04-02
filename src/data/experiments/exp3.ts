export const exp3 = {
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

  image : "src/assets/docker-ps.png"


};