'use client'

import { WorkContext } from '@/context/WorkContext';
import { IWorkout } from '@/types/workout.types';
import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';


const AddToTodaysPlan = ({workout}:{workout:IWorkout}) => {
    
    const { addSaveWorkout } = useContext(WorkContext);

const handleSave = () => {
  addSaveWorkout(workout);
};
   


    return (
        <div>
              <button className="btn btn-primary" onClick={handleSave}>
                <FaPlus />
                Add to today`s plan</button>
        </div>
    );
};

export default AddToTodaysPlan;