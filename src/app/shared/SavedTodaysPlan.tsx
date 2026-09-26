"use client";
import { WorkContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workout.types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

interface ITodaysPlanProps {
  workout: IWorkout;
}

const SavedTodaysPlan = ({ workout }: ITodaysPlanProps) => {
  const { savedWorkout, setSavedWorkout } = useContext(WorkContext);

  const done = () => {
    toast.success("Mark Successfully!", {
      position: "top-right",
    });
  };
  const handleRemoveWorkout = () => {
    const restWorkout = savedWorkout.filter(
      (savedWorkout: IWorkout) => savedWorkout.id !== workout.id,
    );
   
    setSavedWorkout(restWorkout);
     toast.warn('Removed workout successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  };


  return (
    <div className="container mx-auto rounded-xl bg-gray-900 p-4  shadow-md">
      <div className=" flex flex-col items-center  gap-5    md:grid md:grid-cols-2  md:items-center ">
   
      <div className="flex items-center gap-4">
        <Image
          src={workout.image}
          height={100}
          width={120}
          alt={`${workout.name} image`}
          className="h-24 w-24 rounded-lg object-cover md:h-28 md:w-28"
        />

        <div className="space-y-1  ">
          <h1 className="text-lg md:tex-xl font-semibold ">{workout.name}</h1>
          <p className="text-sm text-gray-400">Equipment: {workout.equipment}</p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
            <p>Duration: {workout.duration}</p>
            <p>Calories: {workout.caloriesBurned}</p>
            <p>Rating: {workout.rating}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col  gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
        <Link href={`/workout-details/${workout.id}`}>
          {" "}
          <button className="btn btn-accent w-full sm:w-auto">View Details</button>
        </Link>

        <button className="btn btn-accent w-full sm:w-auto" onClick={done}>
          {" "}
          <FaCheck />
          Mark as Done
        </button>

        <button
          className="btn btn-circle btn-ghost self-end sm:self-auto"
          onClick={() => handleRemoveWorkout()}
        >
          <IoCloseSharp size={24}  className="text-white"/>
        </button>
      </div>
    </div>
    </div>
  );
};

export default SavedTodaysPlan;
