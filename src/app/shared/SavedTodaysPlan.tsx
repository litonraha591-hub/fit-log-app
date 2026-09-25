'use client'
import { IWorkout } from "@/types/workout.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const SavedTodaysPlan = ({ workout }: { workout: IWorkout }) => {
  const done = () => {
    toast.success("Mark Successfully!", {
      position: "top-right",
    });
  };
  return (
    <div className="container mx-auto flex items-center justify-between gap-6 rounded-xl bg-white p-4 shadow-md">
      {/* Workout Information */}
      <div className="flex items-center gap-4">
        <Image
          src={workout.image}
          height={80}
          width={120}
          alt={`${workout.name} image`}
          className="h-20 w-30 rounded-lg object-cover"
        />

        <div className="grid text-start  ">
          <h1 className="text-[20px] font-semibold ">{workout.name}</h1>
          <p>Equipment: {workout.equipment}</p>
          <div className="text-[15px] flex gap-2">
            <p>Duration: {workout.duration}</p>
            <p>Calories: {workout.caloriesBurned}</p>
            <p>Rating: {workout.rating}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
      <Link href={`/workout-details/${workout.id}`}>  <button className="btn btn-accent"  >View Details</button></Link>

        <button className="btn btn-accent" onClick={done} > <FaCheck />Mark as Done</button>

        <button className="btn btn-circle btn-ghost">
          <IoCloseSharp size={24} />
        </button>
      </div>
    </div>
  );
};

export default SavedTodaysPlan;
