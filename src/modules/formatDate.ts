export function getMonthDay(dateString: string): string {
    const date = new Date(dateString);
  
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return `${month}/${day}`;
  }

export function getDayOfWeek(dateString: string): string {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  return days[dayOfWeek];
}

export function getDayOrNight(localTime: string): string {
  const currentHour = new Date(localTime).getHours();

    // Assuming nighttime starts at 6 PM (18:00) and ends at 6 AM (06:00)
    if (currentHour >= 18 || currentHour < 6) {
      return "TONIGHT";
    } else {
      return "TODAY";
    }
}