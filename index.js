function happyHolidays()
{
  return ("Happy holidays!");
}

function happyHolidaysTo()
{
  return ("Happy holidays, ${name}!]");
}
happyHolidaysTo ('Jack');

function happyHolidayTo()
{
   return ("Happy ${holiday}, $name}!");
}
happyHolidayTo('Kwanzaa', 'John');

function holidayCountdown()
{
  return ("It's ${days} days until ${holiday}!");
}
holidayCountdown(5, "Christmas");