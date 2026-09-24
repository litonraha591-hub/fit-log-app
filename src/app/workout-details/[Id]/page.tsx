
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
    <div className="flex justify-between  container mx-auto gap-[50px] m-4">
      <div>
        <Image
          src={workout.image}
          height={400}
          width={600}
          alt="workoutDetailsImage"
        ></Image>
      </div>
      <div>
        <h1>{workout.name}</h1>
        <p>{workout.description}</p>
        <div className="flex gap-3">
          {workout.muscleGroups.map((muscle, ind) => (
            <span
              key={ind}
              className="founded-full bg-gray-200 px-3 py-1 mt-1 border-none rounded-[3px]"
            >
              {" "}
              {muscle}
            </span>
          ))}
        </div>
        <div>
          <div className="flex justify-between">
            <h1>EQUIPMENT</h1>
            <h1> {workout.equipment}</h1>
          </div>
          <div className="flex justify-between">
            <h1>DIFFICULTY</h1>
            <h1> {workout.difficulty}</h1>
          </div>
          <div className="flex justify-between">
            <h1> SETS</h1>
            <h1> {workout.sets}</h1>
          </div>
          <div className="flex justify-between">
            <h1>REPS</h1>
            <h1> {workout.reps}</h1>
          </div>
          <div className="flex justify-between">
            <h1> DURATION</h1>
            <h1> {workout.duration}</h1>
          </div>
          <div className="flex justify-between">
            <h1> CALORIESBURNED</h1>
            <h1> {workout.caloriesBurned}</h1>
          </div>
          <div className="flex justify-between">
            <h1>RATING</h1>
            <h1> {workout.rating}</h1>
          </div>
        </div>
        <div>
          <p> 1. {workout.instructions[0]} </p>
          <p> 2. {workout.instructions[1]}</p>
          <p>3. {workout.instructions[2]}</p>
        </div>
        <div className="my-5 flex gap-4">
          <button className="btn btn-success">Add to today`s plan</button>
          <button className="btn btn-primary">Save for later</button>
        </div>
      </div>
    </div>
  );
};

export default WorkOutPage;
