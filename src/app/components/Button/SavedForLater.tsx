'use client'

import { WorkContext } from '@/context/WorkContext';
import { IWorkout } from '@/types/workout.types';
import React, { useContext } from 'react';

const AddToTodaysPlan = ({workout}:{workout:IWorkout}) => {
    const {saveLaterWorkout, setSaveLaterWorkout} = useContext(WorkContext)
   

    const handleSaveForLater=(()=>{
setSaveLaterWorkout([...saveLaterWorkout, workout])
console.log(saveLaterWorkout, setSaveLaterWorkout, "data");
    })
    return (
        <div>
              <button className="btn btn-primary" onClick={()=>handleSaveForLater()}>Add to today`s plan</button>
        </div>
    );
};

export default AddToTodaysPlan;