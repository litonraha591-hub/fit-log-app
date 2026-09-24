"use client";
import React, { createContext, ReactNode, useState } from "react";
import { IWorkout } from "@/types/workout.types";
interface IWorkoutContext {
  savedWorkout: IWorkout[];
  setSavedWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}
export const WorkContext = createContext<IWorkoutContext>({
  savedWorkout: [],
  setSavedWorkout: () => {},
});

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [savedWorkout, setSavedWorkout] = useState<IWorkout[]>([]);

  const sharedData = {
    savedWorkout,
    setSavedWorkout,
  };
  return (
    <WorkContext.Provider value={sharedData}>{children}</WorkContext.Provider>
  );
};

export default WorkProvider;
