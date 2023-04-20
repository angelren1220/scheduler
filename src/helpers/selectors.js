
export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const findDay = state.days.find(
    data => data.name === day);

  if (!findDay) return [];
  
  const appointments = findDay.appointments.map((id) => {
    return state.appointments[id];
  });

  return appointments;
}