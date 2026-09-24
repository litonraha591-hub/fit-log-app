import { IWorkout } from '@/types/workout.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IWorkoutCardProps{
    workout:IWorkout;
}

const WorkoutCard = ({workout}:IWorkoutCardProps) => {
    return (
      <Link href={`/workout-details/${workout.id}`}>
          <div id='library' className=''>
              <div key={workout.id} className="border rounded-[4px]">
               <div>
                 <Image
                   src={workout.image}
                   height={200}
                   width={300}
                   alt="workoutImage"
                 ></Image>
               </div>
               <div className="grid ">
                 <div className="flex gap-3">{workout.muscleGroups .map((muscle,ind)=>(
                   <span key={ind} className="founded-full bg-gray-200 px-3 py-1 mt-1 border-none rounded-[3px]"> {muscle}</span>
                 ))}</div>
                 <div>{workout.name}</div>
                 <div>{workout.equipment}</div>
                 <div>{workout.duration}</div>
                 <div>{workout.caloriesBurned}</div>
                 <div>{workout.rating}</div>
               </div>
             </div>
        </div>
      </Link>
    );
};

export default WorkoutCard;