function generateCalendar(month, year) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay(); 
  
    const calendar = [];
    for (let row = 0; row < 6; row++) {
      calendar[row] = [];
      for (let col = 0; col < 7; col++) {
        if (row === 0 && col < firstDay) {
          calendar[row][col] = '';
        } else if (calendar.length > daysInMonth) {
          calendar[row][col] = '';
        } else {
          calendar[row][col] = calendar.length + 1;
        }
      }
    }
  
    return calendar;
  }
  
  function printCalendar(calendar) {
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    console.log(daysOfWeek.join(' '));
    for (let row of calendar) {
      console.log(row.join(' '));
    }
  }
  
  const month = 8; 
  const year = 2018;
  const calendar = generateCalendar(month, year);
  printCalendar(calendar);