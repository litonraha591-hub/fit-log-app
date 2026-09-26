
import AddToTodaysPlan from "@/app/components/Button/AddToTodaysPlan";
import SavedForLater from "@/app/components/Button/SavedForLater";
import { IWorkout } from "@/types/workout.types";
import Image from "next/image";
import React from "react";

interface IWorkOutPageProps {
  params: Promise<{
    Id: string;
  }>;
}

const WorkOutPage = async ({ params }: IWorkOutPageProps) => {
  const { Id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${Id}`);
  const workout: IWorkout = await res.json();

  return (
  <div className="bg-black text-white">
     <div className="container mx-auto px-4 py-8">
     <div className="flex  flex-col gap-8 md:flex-row md:items-start">
      <div className="w-full md:w-1/2">
        <Image
          src={workout.image}
          height={400}
          width={600}
          alt="workoutDetailsImage"
          className="h-auto w-full rounded-lg bg-gray-100 object-contain"
        ></Image>
      </div>
      <div className="w-full space-y-5 md:w-1/2">
        <h1 className="text-3xl font-bold text-white" >{workout.name}</h1>
        <p className=" text-gray-400">{workout.description}</p>
        <div className="flex flex-wrap gap-2 text-black">
          {workout.muscleGroups.map((muscle, ind) => (
            <span
              key={ind}
              className="rounded-full bg-gray-200 px-3 py-1 mt-1 border-none text-sm "
            >
              {" "}
              {muscle}
            </span>
          ))}
        </div>
        <div className="space-y-3 rounded-lg bg-gray-900 p-4">
          <div className="flex justify-between">
            <h1 className="font-semibold">EQUIPMENT</h1>
            <h1> {workout.equipment}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold">DIFFICULTY</h1>
            <h1> {workout.difficulty}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold"> SETS</h1>
            <h1> {workout.sets}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold">REPS</h1>
            <h1> {workout.reps}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold"> DURATION</h1>
            <h1> {workout.duration}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold"> CALORIESBURNED</h1>
            <h1> {workout.caloriesBurned}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold">RATING</h1>
            <h1> {workout.rating}</h1>
          </div>
        </div>
        <div>
          <h1 className="mb-3 text-xl font-bold">Instructions</h1>
          <div className="space-y-2">
          {
            workout.instructions.map((step,ind)=>{
             return( <p key={ind}>
                <span className="font-semibold">{ind+1}.</span> {step}
              </p>)
            })
          }
          </div>
        </div>
        <div className="flex flex-col  gap-3 sm:flex-row">
        <AddToTodaysPlan workout={workout}></AddToTodaysPlan>
          <SavedForLater workout={workout}></SavedForLater>
        </div>
      </div>
    </div>
   </div>
  </div>
  );
};

export default WorkOutPage;
