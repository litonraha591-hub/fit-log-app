"use client";
import { WorkContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workout.types";

import Link from "next/link";
import React, { useContext } from "react";
import SavedTodaysPlan from "../shared/SavedTodaysPlan";

const MyPlanPage = () => {
  const { savedWorkout, saveLaterWorkout } = useContext(WorkContext);
  return (
    <div className="space-y-2">
      <div>
        <h1>MY PLAN</h1>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <div className="grid grid-cols-3 justify-center">
        <p>Excercises</p>
        <p>Minutes</p>
        <p>Calories</p>
      </div>
      {/* name of each tab group should be unique */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Today`s Plan"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
         {savedWorkout.length > 0 ? (
          savedWorkout.map((workout: IWorkout) => {
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
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 ">
         {saveLaterWorkout.length > 0 ? (
          saveLaterWorkout.map((workout: IWorkout) => {
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

      </div>
      <div className="text-center m-3" id="saveTodaysPlan">
        

        <Link href="/workout-details" className="btn btn-primary p-3 mt-3">
          Go to Workouts
        </Link>
      </div>
    </div>
  );
};

export default MyPlanPage;
