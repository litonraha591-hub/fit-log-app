'use client'
import { WorkContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workout.types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

interface SavedPlanProps{
  workout:IWorkout,
  
}



const SavedPlan = ({ workout}: SavedPlanProps) => {

const {saveLaterWorkout, setSaveLaterWorkout}=useContext(WorkContext)
  
const handleSaveWorkout = (workout: IWorkout) => {
  const alreadyExists = saveLaterWorkout.some(
    (saved) => saved.id === workout.id
  );

  if (alreadyExists) {
    toast.warning("This workout is already in your saved list!");
    return;
  }

  setSaveLaterWorkout([...saveLaterWorkout, workout]);
  toast.success("Workout saved successfully!");
};

  const done = () => {
    toast.success("Mark Successfully!", {
      position: "top-right",
    });
  };
  const handleRemoveWorkout = ()=>{
    const restWorkout = saveLaterWorkout.filter((savedWorkout:IWorkout)=> savedWorkout.id !== workout.id)
    setSaveLaterWorkout(restWorkout)
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
      
  
  }



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

        <button className="btn btn-circle btn-ghost" onClick={()=>handleRemoveWorkout()}  >
          <IoCloseSharp size={24}  />
          
        </button>
      </div>
    </div>
  );
};

export default SavedPlan;
