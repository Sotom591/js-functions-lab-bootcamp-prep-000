function happyHolidays()
{
  return ("Happy holidays!");
}

function happyHolidaysTo()
{
  return (`Happy holidays, ${name}!`);
}
happyHolidaysTo('you');

function happyHolidayTo()
{
   return (`Happy ${holiday}, ${name}!`);
}
happyHolidayTo('Independence Day', 'you');

function holidayCountdown()
{
  return (`It's ${days} days until ${holiday}!`);
}
holidayCountdown(5, "Christmas");