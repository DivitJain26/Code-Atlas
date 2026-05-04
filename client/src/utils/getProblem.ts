import { allExperiments } from "../data/experiments";

export const getProblemById = (id: number) => {
  return allExperiments.find((exp) => exp.id === id);
};