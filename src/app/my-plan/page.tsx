import Link from "next/link";
import React from "react";

const MyPlanPage = () => {
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
        <div className="flex gap-2" >
          <p>Todays Plan</p>
          <p>Saved</p>
        </div>
        <p>Sort by</p>
      </div>
      <div className="text-center m-3">
        <h1>NOTHING HERE YET</h1>
        <p>Browse the library and add a lift to get today moving.</p>
        <Link href='/workout-details'>Go to Workouts</Link>
      </div>
    </div>
  );
};

export default MyPlanPage;
