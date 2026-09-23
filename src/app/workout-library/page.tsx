import { IWorkout } from "@/types/types";
import Image from "next/image";
import React from "react";

const WorkoutLibrary = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workouts = await response.json();

  return (
    <div>
      <h1>THE LIBRARY</h1>
      <p>Twelve lifts covering every major muscle group.</p>
      <div className="grid grid-cols-3 container mx-auto justify-center  items-center gap-5 mt-5 ">
        {workouts.map((workout: IWorkout) => {
        return (
          <div key={workout.id} className="border rounded-[4px]">
            <div>
              <Image
                src={workout.image}
                height={200}
                width={300}
                alt="workoutImage"
              ></Image>
            </div>
            <div className="grid ">
              <div className="flex gap-3">{workout.muscleGroups .map((muscle,ind)=>(
                <span key={ind} className="founded-full bg-gray-200 px-3 py-1 mt-1 border-none rounded-[3px]"> {muscle}</span>
              ))}</div>
              <div>{workout.name}</div>
              <div>{workout.equipment}</div>
              <div>{workout.duration}</div>
              <div>{workout.caloriesBurned}</div>
              <div>{workout.rating}</div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default WorkoutLibrary;
