"use client";
import { WorkContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workout.types";

import Link from "next/link";
import React, { useContext, useMemo, useState } from "react";
import SavedTodaysPlan from "../shared/SavedTodaysPlan";
import SavedPlan from "../shared/SavedPlan ";

const MyPlanPage = () => {
  const { savedWorkout, saveLaterWorkout } = useContext(WorkContext);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "rating",
  );
const sorWorkout = (workout: IWorkout[]) => {
  const sortedWorkout = [...workout];

  if (sortBy === "duration") {
    sortedWorkout.sort((a, b) => a.duration - b.duration);
  } else if (sortBy === "calories") {
    sortedWorkout.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
  } else if (sortBy === "rating") {
    sortedWorkout.sort((a, b) => a.rating - b.rating);
  }

  return sortedWorkout;
};


const sortSavedWorkout = sorWorkout(savedWorkout)
const sortSavedLaterWorkout= sorWorkout(saveLaterWorkout)

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
 
  const excerciseCount =
    activeTab === "today"
      ? savedWorkout.length
      : saveLaterWorkout.length;

  const totalMinutes =
    activeTab === "today"
      ? savedWorkout.reduce(
          (acc, workout) => acc + (workout.duration || 0),
          0,
        )
      : saveLaterWorkout.reduce(
          (acc, workout) => acc + (workout.duration || 0),
          0,
        );
  const totalCalories =
    activeTab === "today"
      ? savedWorkout.reduce(
          (acc, workout) => acc + (workout.caloriesBurned || 0),
          0,
        )
      : saveLaterWorkout.reduce(
          (acc, workout) => acc + (workout.caloriesBurned || 0),
          0,
        );

  return (
    <div className="bg-black text-white min-h-screen">
      <div className=" container mx-auto px-4 py-6 space-y-6">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold">MY PLAN</h1>
        <p className="text-gray-500 mt-2">Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <div className=" bg-gray-900 grid grid-cols-3 gap-3 rounded-xl  text-center ">
        <div className=" p-4">
          <p className="text-sm text-gray-500">Excercises </p>
          <p className="text-2xl font-bold">{excerciseCount}</p>
        </div>
        <div className=" p-4">
          <p className="text-sm text-gray-500">Minutes </p>
          <p className="text-2xl font-bold">{totalMinutes}</p>
        </div>
        <div className=" p-4">
          <p className="text-sm text-gray-500"> Calories </p>
          <p className="text-2xl font-bold">{totalCalories}</p>
        </div>
      </div>

      
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="tabs tabs-border ">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-white"
          
          aria-label="Today`s Plan"
          defaultChecked
          onChange={() => setActiveTab("today")}
        />
        <div className="tab-content mt-4 rounded-xl border border-gray-800 bg-gray-900 p-4 md:p-6 space-y-3">
          {sortSavedWorkout.length > 0 ? (
            sortSavedWorkout.map((workout: IWorkout) => {
              return (
                <SavedTodaysPlan
                  key={workout.id}
                  workout={workout}
                ></SavedTodaysPlan>
              );
            })
          ) : (
            <div className="py-8 text-center">
              <h1 className="text-xl font-bold">NOTHING HERE YET</h1>
              <p className="text-gray-400 mt-2">Browse the library and add a lift to get today moving.</p>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-white"
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content mt-4 rounded-xl border border-gray-800 bg-gray-900 p-4 md:p-6 space-y-3">
          {sortSavedLaterWorkout.length > 0 ? (
            sortSavedLaterWorkout.map((workout: IWorkout) => {
              return <SavedPlan key={workout.id} workout={workout}></SavedPlan>;
            })
          ) : (
            <div className="py-8 text-center">
              <h1 className="text-xl font-bold">NOTHING HERE YET</h1>
              <p className="text-gray-400 mt-2">Browse the library and add a lift to get today moving.</p>
            </div>
          )}
        </div>
        <div className="ml-auto w-full sm:w-auto">
          <select
            defaultValue="Sort by"
            className="select select-accent w-full sm:w-44 bg-gray-900 border-gray-700 text-white"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
          >
            <option disabled={true}>Sort by</option>
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
      </div>
    </div>
      <div className="text-center p-2" id="saveTodaysPlan">
        <Link href="/" className="nline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:opacity-90">
          Go to Workouts
        </Link>
      </div>
    </div>
    </div>
  );
};

export default MyPlanPage;
