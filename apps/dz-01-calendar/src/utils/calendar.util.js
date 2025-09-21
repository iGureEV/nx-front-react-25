/** Сравнение дат без времени */
export const isSameDate = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  };

/** Получение календарной сетки */
export const getCalendarGrid = (currentDate) => {
    const targetDate = currentDate ?? new Date();

    // получение года и месяца
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    // получение первого дня месяца
    const firstDay = new Date(year, month, 1);
    
    // определение понедельника первой недели календаря
    const startDay = new Date(firstDay);
    const dayOfWeek = firstDay.getDay() || 7; // 0 (воскресенье) -> 7, 1-6 -> 1-6
    startDay.setDate(firstDay.getDate() - (dayOfWeek - 1));
    
    const grid = [];
    let currentDay = new Date(startDay);
    
    // генерация 6 недель (максимальное количество в месяце)
    for (let week = 0; week < 6; week++) {
        const weekDays = [];
        
        // 7 дней в неделе
        for (let day = 0; day < 7; day++) {
            const dayDate = new Date(currentDay);
            const isCurrentMonth = dayDate.getMonth() === month;
            const isTargetDate = isSameDate(dayDate, targetDate);
            
            weekDays.push({
                date: dayDate,
                day: dayDate.getDate(),
                isCurrentMonth,
                isTargetDate
            });
            
            currentDay.setDate(currentDay.getDate() + 1);
        }
        
        // добавление недели только если она содержит дни текущего месяца
        if (week === 0 || weekDays.some(day => day.isCurrentMonth)) {
            grid.push(weekDays);
        }
        
        // прекращение генерации при выходе за пределы месяца
        if (currentDay.getMonth() > month && currentDay.getFullYear() >= year) {
            break;
        }
    }
    
    return grid;
};
