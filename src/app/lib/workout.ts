export const getAllWorkout = async()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const workouts = await res.json();
    return workouts;
}