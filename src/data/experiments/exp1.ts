export const exp1 = {
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

  image: "src/assets/docker-installation.png"
};