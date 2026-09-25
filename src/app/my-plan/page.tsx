"use client";
import { WorkContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workout.types";

import Link from "next/link";
import React, { useContext, useMemo, useState } from "react";
import SavedTodaysPlan from "../shared/SavedTodaysPlan";
import SavedPlan from "../shared/SavedPlan ";

const MyPlanPage = () => {
  const { savedWorkout, saveLaterWorkout } = useContext(WorkContext);



  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
const uniqueSavedWorkout = useMemo(
  () =>
    savedWorkout.filter(
      (workout, index, self) =>
        index === self.findIndex((w) => w.id === workout.id)
    ),
  [savedWorkout]

  
);

const uniqueSaveLaterWorkout = useMemo(
  () =>
    saveLaterWorkout.filter(
      (workout, index, self) =>
        index === self.findIndex((w) => w.id === workout.id)
    ),
  [saveLaterWorkout]
);

  const excerciseCount =
    activeTab === "today" ? uniqueSavedWorkout.length : uniqueSaveLaterWorkout.length;

  const totalMinutes =
    activeTab === "today"
      ? uniqueSavedWorkout.reduce((acc, workout) => acc + (workout.duration || 0), 0)
      : uniqueSaveLaterWorkout.reduce(
          (acc, workout) => acc + (workout.duration || 0),
          0,
        );
  const totalCalories =
    activeTab === "today"
      ? uniqueSavedWorkout.reduce(
          (acc, workout) => acc + (workout.caloriesBurned || 0),
          0,
        )
      : uniqueSaveLaterWorkout.reduce(
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
        <div><p>Excercises </p>
        <p>{excerciseCount}</p></div>
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
          {uniqueSavedWorkout.length > 0 ? (
            uniqueSavedWorkout.map((workout: IWorkout) => {
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
          {uniqueSaveLaterWorkout.length > 0 ? (
            uniqueSaveLaterWorkout.map((workout: IWorkout) => {
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
          <select defaultValue="Color scheme" className="select select-accent">
            <option disabled={true}>Color scheme</option>
            <option>Light mode</option>
            <option>Dark mode</option>
            <option>System</option>
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
