function happyHolidays()
{
  return ("Happy holidays!");
}

function happyHolidaysTo()
{
  console.log("Happy holidays, ${name}!]");
}
happyHolidaysTo ('Jack');

function happyHolidayTo()
{
  console.log("Happy ${holiday}, $name}!");
}
happyHolidayTo('Kwanzaa', 'John');

function holidayCountdown()
{
  console.log("It's ${days} days until ${holiday}!");
}
holidayCountdown(5, "Christmas");