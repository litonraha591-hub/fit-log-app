// 

"use client";

import { WorkContext } from "@/context/WorkContext";
import { IWorkout } from "@/types/workout.types";
import Link from "next/link";
import React, { useContext, useState } from "react";
import SavedTodaysPlan from "../shared/SavedTodaysPlan";
import SavedPlan from "../shared/SavedPlan ";

const MyPlanPage = () => {
  const { savedWorkout, saveLaterWorkout } = useContext(WorkContext);

  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const sortWorkout = (workouts: IWorkout[]) => {
    const sorted = [...workouts];

    if (sortBy === "duration") {
      sorted.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      sorted.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    } else {
      sorted.sort((a, b) => a.rating - b.rating);
    }

    return sorted;
  };

  const sortSavedWorkout = sortWorkout(savedWorkout);
  const sortSavedLaterWorkout = sortWorkout(saveLaterWorkout);

  const exerciseCount =
    activeTab === "today"
      ? savedWorkout.length
      : saveLaterWorkout.length;

  const totalMinutes =
    activeTab === "today"
      ? savedWorkout.reduce((acc, workout) => acc + workout.duration, 0)
      : saveLaterWorkout.reduce((acc, workout) => acc + workout.duration, 0);

  const totalCalories =
    activeTab === "today"
      ? savedWorkout.reduce(
          (acc, workout) => acc + workout.caloriesBurned,
          0
        )
      : saveLaterWorkout.reduce(
          (acc, workout) => acc + workout.caloriesBurned,
          0
        );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 space-y-8">

        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            MY PLAN
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">

          <div className="rounded-xl bg-gray-900 p-4 text-center transition hover:bg-gray-800">
            <p className="text-xs md:text-sm text-gray-400">Exercises</p>
            <p className="mt-1 text-xl md:text-3xl font-bold text-[#C2F800]">
              {exerciseCount}
            </p>
          </div>

          <div className="rounded-xl bg-gray-900 p-4 text-center transition hover:bg-gray-800">
            <p className="text-xs md:text-sm text-gray-400">Minutes</p>
            <p className="mt-1 text-xl md:text-3xl font-bold text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-xl bg-gray-900 p-4 text-center transition hover:bg-gray-800">
            <p className="text-xs md:text-sm text-gray-400">Calories</p>
            <p className="mt-1 text-xl md:text-3xl font-bold text-white">
              {totalCalories}
            </p>
          </div>

        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-white"
              aria-label="Today's Plan"
              defaultChecked
              onChange={() => setActiveTab("today")}
            />

            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-white"
              aria-label="Saved"
              onChange={() => setActiveTab("saved")}
            />
          </div>
           
          <select
            className="select select-accent w-full sm:w-44 rounded-lg border border-gray-700 bg-gray-900 text-white"
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as "duration" | "calories" | "rating"
              )
            }
          > 
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>

        </div>

        {activeTab === "today" ? (
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 md:p-6">

            {sortSavedWorkout.length > 0 ? (
              <div className="space-y-4">
                {sortSavedWorkout.map((workout) => (
                  <SavedTodaysPlan key={workout.id} workout={workout} />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center">
                <h2 className="text-xl font-bold">
                  NOTHING HERE YET
                </h2>

                <p className="mt-2 text-gray-400">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:opacity-90"
                >
                  Go to Workouts
                </Link>
              </div>
            )}

          </div>
        ) : (
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 md:p-6">

            {sortSavedLaterWorkout.length > 0 ? (
              <div className="space-y-4">
                {sortSavedLaterWorkout.map((workout) => (
                  <SavedPlan key={workout.id} workout={workout} />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center">
                <h2 className="text-xl font-bold">
                  NOTHING HERE YET
                </h2>

                <p className="mt-2 text-gray-400">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:opacity-90"
                >
                  Go to Workouts
                </Link>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default MyPlanPage;