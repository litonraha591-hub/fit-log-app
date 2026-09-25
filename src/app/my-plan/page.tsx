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
    <div className="space-y-2 container mx-auto">
      <div>
        <h1>MY PLAN</h1>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <div className="grid grid-cols-3 justify-center items-center text-center">
        <div>
          <p>Excercises </p>
          <p>{excerciseCount}</p>
        </div>
        <div>
          <p>Minutes </p>
          <p>{totalMinutes}</p>
        </div>
        <div>
          <p>Calories </p>
          <p>{totalCalories}</p>
        </div>
      </div>

      {/* name of each tab group should be unique */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border flex ">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Today`s Plan"
          defaultChecked
          onChange={() => setActiveTab("today")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 gap-3">
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
            <div>
              <h1>NOTHING HERE YET</h1>
              <p>Browse the library and add a lift to get today moving.</p>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 ">
          {sortSavedLaterWorkout.length > 0 ? (
            sortSavedLaterWorkout.map((workout: IWorkout) => {
              return <SavedPlan key={workout.id} workout={workout}></SavedPlan>;
            })
          ) : (
            <div>
              <h1>NOTHING HERE YET</h1>
              <p>Browse the library and add a lift to get today moving.</p>
            </div>
          )}
        </div>
        <div className="flex">
          <select
            defaultValue="Sort by"
            className="select select-accent"
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
      <div className="text-center m-3" id="saveTodaysPlan">
        <Link href="/" className="btn btn-primary p-3 mt-3">
          Go to Workouts
        </Link>
      </div>
    </div>
  );
};

export default MyPlanPage;
