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
      <div
        key={workout.id}
       
        className="overflow-hidden rounded-lg border border-gray-800 text-white bg-gray-900  transition hover:shadow-lg"
      >
        <div className="relative  w-full">
          <Image
            src={workout.image}
            height={200}
            width={300}
            alt="workoutImage"
            className=" object-contain h-auto w-full "
          ></Image>
        </div>

        <div className="space-y-3 p-4  ">
          <div className="flex flex-wrap gap-2 text-black">
            {workout.muscleGroups.map((muscle, ind) => (
              <span
                key={ind}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold"
              >
                {" "}
                { muscle}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold">{workout.name}</h3>

          <div className="space-y-1 text-medium text-gray-400">
            <p>{workout.equipment}</p>
            <div className="flex justify-start gap-5">
              <p className="flex gap-1 items-center">
                <span>
                  <CiClock2 />
                </span>{" "}
                {workout.duration}
              </p>
              <p className="flex gap-1 items-center">
                {" "}
                <span>
                  <AiTwotonePieChart />
                </span>
                {workout.caloriesBurned}
              </p>
              <p className="flex gap-1 items-center">
                {" "}
                <span className=" text-yellow-500">
                  <FaStar />
                </span>{" "}
                {workout.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
