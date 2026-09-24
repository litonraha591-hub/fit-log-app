import { IWorkout } from '@/types/workout.types';
import Image from 'next/image';
import React from 'react';

const SavedTodaysPlan = ({workout}:{workout:IWorkout}) => {
    return (
        <div className='space-x-3'>
            <div>
                <Image src={workout.image} height={50} width={80} alt='todaysPlan Image'></Image>
            </div>
            <div>
                <h1>{workout.name}</h1>
                <h2>{workout.description}</h2>
            </div>
        </div>
    );
};

export default SavedTodaysPlan;