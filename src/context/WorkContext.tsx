"use client";
import React, { createContext, ReactNode, useState } from "react";
import { IWorkout } from "@/types/workout.types";
import { toast } from "react-toastify";
interface IWorkoutContext {
  savedWorkout: IWorkout[];
  setSavedWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saveLaterWorkout: IWorkout[];
  setSaveLaterWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  addSaveWorkout: (workout: IWorkout) => void;
  addSaveLaterWorkout: (workout: IWorkout) => void;
}
export const WorkContext = createContext<IWorkoutContext>({
  savedWorkout: [],
  setSavedWorkout: () => {},
  saveLaterWorkout: [],
  setSaveLaterWorkout: () => {},
  addSaveWorkout: () => {},
  addSaveLaterWorkout: () => {},
});

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [savedWorkout, setSavedWorkout] = useState<IWorkout[]>([]);
  const [saveLaterWorkout, setSaveLaterWorkout] = useState<IWorkout[]>([]);
    
const addSaveWorkout = (workout: IWorkout) => {
    const exists = savedWorkout.some((item) => item.id === workout.id);

    if (exists) {
      toast.warning("This workout is already saved!");
      return;
    }

    setSavedWorkout((prev) => [...prev, workout]);
    toast.success("Workout saved successfully!");
  };

const addSaveLaterWorkout = (workout: IWorkout) => {
    const exists = saveLaterWorkout.some((item) => item.id === workout.id);

    if (exists) {
      toast.warning("This workout is already saved!");
      return;
    }

    setSaveLaterWorkout((prev) => [...prev, workout]);
    toast.success("Workout saved successfully!");
  };

 

  const sharedData = {
    savedWorkout,
    setSavedWorkout,
    saveLaterWorkout,
    setSaveLaterWorkout,
    addSaveLaterWorkout,
    addSaveWorkout,
  };
  return (
    <WorkContext.Provider value={sharedData}>{children}</WorkContext.Provider>
  );
};

export default WorkProvider;
