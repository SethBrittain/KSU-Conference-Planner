import React from "react";
import {eachDayOfInterval, endOfDay, endOfMonth, format, getDay, isSameMonth, isToday, parse, startOfMonth, startOfToday} from 'date-fns';
import './PersonalSchedule.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { endOfWeek } from "date-fns";
import { isEqual } from "date-fns";
import { useState } from "react";
import { add } from "date-fns";
import {Menu} from '@headlessui/react';
import { isSameDay } from "date-fns";
import { parseISO } from "date-fns";

function classNames(...classes:any)
{
    return classes.filter(Boolean).join(' ')
}

const meetings = [
    {
        id: 1,
        name: 'CIS Conference Talk',
        startDatetime: '2024-04-17T13:00',
        endDatetime: '2024-04-17T15:00',
        roomNumber: '1027'
    },
    {
        id: 2,
        name: 'CIS Conference Talk',
        startDatetime: '2024-04-17T10:00',
        endDatetime: '2024-04-17T12:00',
        roomNumber: '1037'
    },
]


const PersonalSchedulePage = () =>
{
    let today = startOfToday();
    let [selectedDay, setSelectedDay] = useState(today);
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
    let days = eachDayOfInterval({start: firstDayCurrentMonth, end: endOfMonth(firstDayCurrentMonth)})
    let selectedDayMeetings = meetings.filter(meetings => isSameDay(parseISO(meetings.startDatetime), selectedDay))
   

    function nextMonth()
    {
        let firstDayNextMonth = add(firstDayCurrentMonth, {months: 1})
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function previousMonth()
    {
        let firstDayNextMonth = add(firstDayCurrentMonth, {months: -1})
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }
    
    
    
    return(
        <div className="pt-16">
            <div className="max-w-md px4 mx-auto sn:px-7 md:max-w-4xl md:px-6">
                <div className="md:grid md:grid-cols-2 md:divid-x md:divid-gray-200">
                    <div className="md:pr-14">
                        <div className="flex items-center">
                            <h2 className="flex-auto font-semibold text-gray-900">
                                {format(firstDayCurrentMonth, 'MMMM yyyy')}
                            </h2>
                            <button  type='button' onClick={previousMonth} className='-ny-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
                                <span className='sr-only'>Previous month</span>
                                <ArrowBackIcon></ArrowBackIcon>
                            </button>
                            <button onClick={nextMonth} type='button' className='-ny-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
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
                            {days.map((day, dayIdx) => (
                            <div 
                                key={day.toString()}
                                className={classNames( 
                                    dayIdx === 0 && colStartClasses[getDay(day)], 'py-2'
                                )}
                            >
                            <button type='button'
                            onClick={() => setSelectedDay(day)}
                            className={classNames(
                                isEqual(day, selectedDay) && 'text-white',
                                !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                                !isEqual(day, selectedDay) && 
                                !isToday(day) && 
                                isSameMonth(day, firstDayCurrentMonth) && 
                                'text-gray-900',
                                !isEqual(day, selectedDay) &&
                                !isToday(day) &&
                                !isSameMonth(day, firstDayCurrentMonth) &&
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
                    <section className='mt-12 md:mt-0 md:pl-14'>
                        <h2 className='font-semibold text-gray-900'>
                            Schedule for {' '}<time dateTime={format(selectedDay, 'yyyy-MM-dd')}>{format(selectedDay, 'MMM dd, yyyy')}</time>
                        </h2>
                        <ol className='mt-4 space-y-1 text-sn leading-6 text-gray-500'>
                            {selectedDayMeetings.length > 0 ? (
                            selectedDayMeetings.map((meetings) => (
                                <Meeting meeting={meetings} key={meetings.id}/>
                            ))
                            ) : ( <p>You have not signed up for any events</p>)
                            }
                        </ol>
                    </section>
                </div>
            </div>
        </div>
    )
}


function Meeting({meeting}: {meeting:any}){
    let startDateTime = parseISO(meeting.startDatetime)
    let endDateTime = parseISO(meeting.endDatetime)

    return (<li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
    <div className='flex-auto'>
        <p className='text-gray-900'>{meeting.name}</p>
        <p>Room: {meeting.roomNumber}</p> 
        <p className='me-0.5'>
            <time dateTime={meeting.startDatetime}>
                {format(startDateTime, 'h:mm a')}
            </time> {' '}
            -{' '}
            <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'h:mm a')}
            </time>
        </p>
    </div>
    <Menu as = 'div' className='relative opacity-0 focus-within:opacity-100 group-hover:opacity-100'>
        <div>
            <Menu.Button className='-m-2 flex items-center rounded-full p-1.5 text-gray hover:text-gray-600'>
                <span className="sr-only">Open options</span>
            </Menu.Button>
        </div>
    </Menu>
    </li>
    )
}


let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7'
]

export default PersonalSchedulePage;