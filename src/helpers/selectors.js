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

export function updateSpots(state, appointments) {
  const findDay = state.days.find(
    data => data.name === state.day);

  let spots = 0;

  findDay.appointments.forEach(id => {
    if (!appointments[id].interview) {
      spots++;
    }
  });

  const updatedDay = { ...findDay, spots };
  return state.days.map(data => data.name === state.day ? updatedDay : data);
};