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

/**
 * A list of sample meetings
 */
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
        startDatetime: '2024-04-19T10:00',
        endDatetime: '2024-04-19T12:00',
        roomNumber: '1037'
    },
    {
        id: 3,
        name: 'CIS Conference Talk',
        startDatetime: '2024-04-19T12:00',
        endDatetime: '2024-04-19T14:00',
        roomNumber: '1037'
    },
]

/**
 * Creates the page for the personal schedule
 * @returns The component for the personal schedule page
 */
const PersonalSchedulePage = () =>
{
    //The current day
    let today = startOfToday();
    //Sets the current day
    let [currentDay, setCurrentDay] = useState(format(today, 'MMM dd yyyy'))
    // Selects the meetings of the currentDay
    let selectedDayMeetings = meetings.filter(meetings => isSameDay(parseISO(meetings.startDatetime), currentDay))
    /**
     * Gets the next day using the current day
     */
    function nextDay()
    {
        let nextDay = add(currentDay, {days: 1})
        setCurrentDay(format(nextDay, 'MMM dd yyyy'))
    }
    /**
     * Gets the previous day 
     */
    function previousDay()
    {
        let previousDay = add(currentDay, {days: -1})
        setCurrentDay(format(previousDay, 'MMM dd yyyy'))
    }

    return(
        <div className="pt-16">
            <p className="text-6xl text-center">Your Schedule</p>
                <div className="md:grid md:grid-cols-2 md:divid-x md:divid-gray-200">
                    <section className='mt-12 md:mt-0 md:pl-14'>
                        <div className="flex items-center">
                            <button  type='button' onClick={previousDay} className='-ny-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
                                <span className='sr-only'>Previous month</span>
                                <ArrowBackIcon></ArrowBackIcon>
                            </button>
                            <h2 className='font-semibold text-gray-900'>
                                Schedule for {' '}<time dateTime={format(currentDay, 'yyyy-MM-dd')}>{format(currentDay, 'MMM dd, yyyy')}</time>
                            </h2>
                            <button onClick={nextDay} type='button' className='-ny-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
                                <span className='sr-only'>Next Month</span>
                                <ArrowForwardIcon></ArrowForwardIcon>
                            </button>
                        </div>
                        <ol className='mt-4 space-y-1 text-sn leading-6 text-gray-500'>
                            {selectedDayMeetings.length > 0 ? (
                            selectedDayMeetings.map((meetings) => (
                                <Meeting meeting={meetings} key={meetings.id}/>
                            ))
                            ) : ( <p>You have not signed up for any presentations</p>)
                            }
                        </ol>
                    </section>
                </div>
        </div>
    )
}

/**
 * Creates the subcomponent used for the personal schedule page
 * @param param0 The meeting that is going to be used to populate the component
 * @returns The component used to show personal schedule
 */
function Meeting({meeting}: {meeting:any}){
    let startDateTime = parseISO(meeting.startDatetime)
    let endDateTime = parseISO(meeting.endDatetime)

    return (<li className="flex items-start px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
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

export default PersonalSchedulePage;