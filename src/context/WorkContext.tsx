"use client";
import React, { createContext, ReactNode, useState } from "react";
import { IWorkout } from "@/types/workout.types";
interface IWorkoutContext {
  savedWorkout: IWorkout[];
  setSavedWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saveLaterWorkout:IWorkout[],
  setSaveLaterWorkout:React.Dispatch<React.SetStateAction<IWorkout[]>>;
 }
export const WorkContext = createContext<IWorkoutContext>({
  savedWorkout: [],
  setSavedWorkout: () => {},
  saveLaterWorkout:[],
  setSaveLaterWorkout:()=>{},
});

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [savedWorkout, setSavedWorkout] = useState<IWorkout[]>([]);
  const[saveLaterWorkout,setSaveLaterWorkout]=useState<IWorkout[]>([])

  const sharedData = {
    savedWorkout,
    setSavedWorkout,
    saveLaterWorkout,
    setSaveLaterWorkout
  };
  return (
    <WorkContext.Provider value={sharedData}>{children}</WorkContext.Provider>
  );
};

export default WorkProvider;
