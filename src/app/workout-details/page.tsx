import { IWorkout } from "@/types/workout.types";

import React from "react";
import { getAllWorkout } from "../lib/workout";
import WorkoutCard from "../shared/WorkoutCard";

const WorkOutPage = async () => {
  const workouts = await getAllWorkout();

  return (
    <div>
      <h1 className="text-2xl ">THE LIBRARY</h1>
      <p>Twelve lifts covering every major muscle group.</p>
      <div className="grid grid-cols-3 gap-4  ">
        {workouts.map((workout: IWorkout) => {
          return <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>;
        })}
      </div>
    </div>
  );
};

export default WorkOutPage;
