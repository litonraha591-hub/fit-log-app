"use client";
import { WorkContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workout.types";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import SavedTodaysPlan from "../shared/SavedTodaysPlan";

const MyPlanPage = () => {
  const { savedWorkout } = useContext(WorkContext);
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
      <div className="grid grid-cols-2 justify-between">
        <div role="tablist" className="tabs tabs-box">
          <a role="tab" className="tab">
            Saved plan
          </a>
          <a role="tab" className="tab tab-active">
            Tab 2
          </a>
        </div>
        <p>Sort by</p>
      </div>
      <div className="text-center m-3">
        {savedWorkout.length > 0 ? (
          savedWorkout.map((workout: IWorkout) => {
            return <SavedTodaysPlan key={workout.id} workout={workout}></SavedTodaysPlan>
          })
        ) : (
          <div>
            <h1>NOTHING HERE YET</h1>
            <p>Browse the library and add a lift to get today moving.</p>
          </div>
        )}

        <Link href="/workout-details">Go to Workouts</Link>
      </div>
    </div>
  );
};

export default MyPlanPage;
