import { IWorkout } from "@/types/workout.types";

import React from "react";
import { getAllWorkout } from "../lib/workout";
import WorkoutCard from "../shared/WorkoutCard";

const WorkOutPage = async () => {
  const workouts = await getAllWorkout();

  return (
   <div className="bg-black">
     <div  id="library" className="container mx-auto px-4 py-10" >
     <div className="mb-8 text-center md:text-left">
       <h1 className=" text-3xl font-bold text-white md:text-4xl">THE LIBRARY</h1>
      <p className= " m-2  text-gray-400">Twelve lifts covering every major muscle group.</p>
      <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3  ">
        {workouts.map((workout: IWorkout) => {
          return <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>;
        })}
      </div>
     </div>
    </div>
   </div>
  );
};

export default WorkOutPage;
