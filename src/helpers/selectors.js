export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  if (!day) return [];

  const findDay = state.days.find(
    data => data.name === day);

  if (!findDay) return [];

  const appointments = findDay.appointments.map((id) => {
    return state.appointments[id];
  });

  return appointments;
}

export function getInterview(state, interview) {
  if (!interview) return null;

  const scheduledInterview = {
    interviewer: state.interviewers[interview.interviewer],
    student: interview.student
  };

  return scheduledInterview;
}

export function getInterviewersForDay(state, day) {
  //... returns an array of appointments for that day
  if (!day) return [];

  const findDay = state.days.find(
    data => data.name === day);

  if (!findDay) return [];

  const interviewers = findDay.interviewers.map((id) => {
    return state.interviewers[id];
  });

  return interviewers;
}

export function updateSpots(state, appointments, id) {
  // 1. find the day object for today
  // 2. iterate appointment ids for that day
  // 3. count ones that have null interviews
  const findDay = state.days.find(
    data => data.name === state.day);

  let count = 0;

  findDay.appointments.forEach(id => {
    if (!appointments[id].interview) {
      count++;
    }
  });

  // 4. create a new day object with new spot
  // 5. put the day object in new days array
  // 6. return days

  const updatedDay = { ...findDay, spots: count };

  const updatedDays = state.days.map((data) => {
    if (data.name === updatedDay.name) {
       data = {...updatedDay};
    }
    return data;
  });

  // return an updated days array
  return updatedDays;
};