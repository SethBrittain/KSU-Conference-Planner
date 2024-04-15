import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Box} from "@mui/material";
import {eachDayOfInterval, endOfDay, endOfMonth, format, isSameMonth, isToday, startOfMonth, startOfToday} from 'date-fns';
import './PersonalSchedule.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ClassNames } from "@emotion/react";
import { endOfWeek } from "date-fns";
import { Fragment } from "react";
import { isEqual } from "date-fns";
import { useState } from "react";


const PersonalSchedulePage = () =>
    {
        return (

            <text>hi!</text>
        )
    }

/*
function classNames(...classes:any)
{
    return classes.filter(Boolean).join(' ')
}



const PersonalSchedulePage = () =>
{
    let today = startOfToday();
    let [selectedDay, setSelectedDay] = useState(today);
    let newDays = eachDayOfInterval({start: startOfMonth(today), end: endOfWeek(endOfMonth(today))})
    return(
        <div className="pt-16">
            <div className="max-w-md px4 mx-auto sn:px-7 md:max-w-4xl md:px-6">
                <div className="md:grid md:grid-cols-2 md:divid-x md:divid-gray-200">
                    <div className="md:pr-14">
                        <div className="flex items-center">
                            <h2 className="flex-auto font-semibold text-gray-900">
                                {format(today, 'MMM yyyy')}
                            </h2>
                            <button type='button' className='-ny-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
                                <span className='sr-only'>Previous month</span>
                                <ArrowBackIcon></ArrowBackIcon>
                            </button>
                            <button type='button' className='-ny-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
                                <span className='sr-only'>Next Month</span>
                                <ArrowForwardIcon></ArrowForwardIcon>
                            </button>
                        </div>
                        <div className='grid grid-cols-7 nt-10 text-xs leading-6 text-center text-gray-500'>
                            <div>S</div>
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>Th</div>
                            <div>F</div>
                            <div>S</div>
                        </div>
                        <div className='grid grid-cols-7 nt-2 text-sm'>
                            {newDays.map((day, dayIdx) => (
                            <div 
                                key={day.toString()}
                                className={classNames( 
                                    dayIdx > 6 && "border-t border-gray-200", 'py-2'
                                )}
                            >
                            <button type='button'
                            onClick={() => setSelectedDay(day)}
                            className={classNames(
                                isEqual(day, selectedDay) && 'text-white',
                                !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                                !isEqual(day, selectedDay) && 
                                !isToday(day) && 
                                isSameMonth(day, today) && 
                                'text-gray-900',
                                !isEqual(day, selectedDay) &&
                                !isToday(day) &&
                                !isSameMonth(day, today) &&
                                'text-gray-400',
                                isEqual(day, selectedDay) && isToday(day) && 'bg-red-600',
                                isEqual(day, selectedDay)&& !isToday(day) && 'bg-gray-900',
                                !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',                             
                                'mx-auto flex h-8 w-8 items-center justify-center rounded-full')}>
                                <time dateTime={format(day, 'yyyy-MM-dd')}>
                                    {format(day, 'd')}
                                </time>
                            </button>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
*/

export default PersonalSchedulePage;