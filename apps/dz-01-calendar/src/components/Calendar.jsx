import React from 'react';
import { SHORT_DAY_NAMES, FULL_DAY_NAMES, DAYS_OF_WEEK, MONTHS_GENITIVE, MONTHS_NOMINATIVE } from '../consts';
import { getCalendarGrid } from '../utils'

/** Вечный календарь на основе Date */
export default function Calendar ({ date }) {
    /** Текущая выводимая календарём дата */
    const currentDate = date ?? new Date();

    /** Календарная сетка текущего выводимого месяца */
    const calendarGrid = getCalendarGrid(currentDate);

    return (
        <div className="ui-datepicker">
            {/* Календарная страницы с "текущим" днём: день недели, число, месяц и год */}
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">
                    {DAYS_OF_WEEK[currentDate.getDay()]}
                </div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{currentDate.getDate()}</div>
                    <div className="ui-datepicker-material-month">
                        {MONTHS_GENITIVE[currentDate.getMonth()]}
                    </div>
                    <div className="ui-datepicker-material-year">
                        {currentDate.getFullYear()}
                    </div>
                </div>
            </div>

            {/* Шапка календарной сетки текущего месяца: название месяца и год */}
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">
                        {MONTHS_NOMINATIVE[currentDate.getMonth()]}
                    </span>
                    &nbsp;
                    <span className="ui-datepicker-year">
                        {currentDate.getFullYear()}
                    </span>
                </div>
            </div>

            {/* Календарь на текущий месяц */}
            <table className="ui-datepicker-calendar">
                {/* Стилизация столбцов */}
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>

                {/* Заголовки таблицы */}
                <thead>
                    <tr>
                        {SHORT_DAY_NAMES.map((day, index) => (
                            <th key={index} scope="col" title={FULL_DAY_NAMES[index]}>
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Календарная сетка */}
                <tbody>
                    {calendarGrid.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map((day, dayIndex) => {
                                // выделение "текущей" даты в календарной сетке
                                const className = [
                                    !day.isCurrentMonth ? 'ui-datepicker-other-month' : '',
                                    day.isTargetDate ? 'ui-datepicker-today' : ''
                                ].filter(Boolean).join(' ');
                                
                                return (
                                    <td key={dayIndex} className={className || undefined}>
                                        {day.day}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};