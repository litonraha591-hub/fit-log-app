'use client'

import { WorkContext } from '@/context/WorkContext';
import { IWorkout } from '@/types/workout.types';
import React, { useContext } from 'react';

const AddToTodaysPlan = ({workout}:{workout:IWorkout}) => {
    const {savedWorkout, setSavedWorkout} = useContext(WorkContext)
   

    const handleAddToTodaysPlan=(()=>{
setSavedWorkout([...savedWorkout, workout])
console.log(savedWorkout, setSavedWorkout, "data");
    })
    return (
        <div>
              <button className="btn btn-primary" onClick={()=>handleAddToTodaysPlan()}>Add to today`s plan</button>
        </div>
    );
};

export default AddToTodaysPlan;