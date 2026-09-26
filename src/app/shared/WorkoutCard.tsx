import { IWorkout } from "@/types/workout.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiTwotonePieChart } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface IWorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  return (
    <Link href={`/workout-details/${workout.id}`}>
      <div className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 text-white transition duration-300 hover:-translate-y-1 hover:border-[#C2F800] hover:shadow-xl">

        <div className="relative aspect-[4/3] w-full bg-gray-950">
          <Image
            src={workout.image}
            fill
            alt={workout.name}
            className="object-contain p-3 transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4 p-4">

          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle, ind) => (
              <span
                key={ind}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold line-clamp-2">
              {workout.name}
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              {workout.equipment}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm text-gray-300">

            <div className="flex items-center gap-1 rounded-lg bg-gray-800 p-2">
              <CiClock2 className="text-[#C2F800]" />
              <span>{workout.duration}</span>
            </div>

            <div className="flex items-center gap-1 rounded-lg bg-gray-800 p-2">
              <AiTwotonePieChart className="text-[#C2F800]" />
              <span>{workout.caloriesBurned}</span>
            </div>

            <div className="flex items-center gap-1 rounded-lg bg-gray-800 p-2">
              <FaStar className="text-yellow-400" />
              <span>{workout.rating}</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;