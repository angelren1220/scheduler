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