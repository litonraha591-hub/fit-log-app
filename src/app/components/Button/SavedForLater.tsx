'use client'

import { WorkContext } from '@/context/WorkContext';
import { IWorkout } from '@/types/workout.types';
import React, { useContext } from 'react';


const AddToTodaysPlan = ({workout}:{workout:IWorkout}) => {
    // const {saveLaterWorkout, setSaveLaterWorkout} = useContext(WorkContext)
   
const { addSaveLaterWorkout } = useContext(WorkContext);

const handleSave = () => {
  addSaveLaterWorkout(workout);
};
 
 
    return (
        <div>
              <button className="btn btn-secondary" onClick={handleSave}>Save For Later</button>
        </div>
    );
};

export default AddToTodaysPlan;