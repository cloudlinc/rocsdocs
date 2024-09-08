import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
    {
      title: 'Staff Development',
      start: new Date(2024, 8, 5),  // September 5, 2024 (all day event)
      end: new Date(2024, 8, 10),   // September 10, 2024 (all day event)
    },
    {
      title: 'Last Flexible Start Date',
      start: new Date(2024, 8, 9),  // September 9, 2024 (all day event)
      end: new Date(2024, 8, 10),   // September 10, 2024 (all day event)
      location: 'Acellus Online',
    },
    {
      title: '2nd Mandated 6 Hour Day in Accelus',
      start: new Date(2024, 8, 20),  // September 20, 2024 (all day event)
      end: new Date(2024, 8, 21),    // September 21, 2024 (all day event)
      location: 'Acellus Online',
    },
    {
      title: 'Veterans Day',
      start: new Date(2024, 10, 11),  // November 11, 2024 (all day event)
      end: new Date(2024, 10, 12),    // November 12, 2024 (all day event)
    },
    {
      title: 'Thanksgiving Break - No School',
      start: new Date(2024, 10, 27),  // November 27, 2024 (all day event)
      end: new Date(2024, 11, 3),     // December 3, 2024 (all day event)
    },
    {
      title: 'Last Day of 1st Semester',
      start: new Date(2024, 11, 20),  // December 20, 2024 (all day event)
      end: new Date(2024, 11, 21),    // December 21, 2024 (all day event)
    },
    {
      title: 'Christmas Break - No School',
      start: new Date(2024, 11, 23),  // December 23, 2024 (all day event)
      end: new Date(2025, 0, 4),      // January 4, 2025 (all day event)
    },
    {
      title: '1st Day of 2nd Semester',
      start: new Date(2025, 0, 6),    // January 6, 2025 (all day event)
      end: new Date(2025, 0, 7),      // January 7, 2025 (all day event)
      location: 'Acellus Online',
    },
    {
      title: 'Martin Luther King Jr. Day',
      start: new Date(2025, 0, 20),   // January 20, 2025 (all day event)
      end: new Date(2025, 0, 21),     // January 21, 2025 (all day event)
    },
    {
      title: 'President\'s Day',
      start: new Date(2025, 1, 17),   // February 17, 2025 (all day event)
      end: new Date(2025, 1, 18),     // February 18, 2025 (all day event)
    },
    {
      title: 'Spring Break - No School',
      start: new Date(2025, 2, 17, 8, 0),  // March 17, 2025, 8:00 AM
      end: new Date(2025, 2, 21, 9, 0),    // March 21, 2025, 9:00 AM
    }
  ];
  
function CalendarComponent() {
  return (
    <div style={{ height: '600px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        eventPropGetter={(event, start, end, isSelected) => ({
          style: {
            backgroundColor: '#DE101A',
            borderRadius: '5px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
          }
        })}
      />
    </div>
  );
}

export default function EventsCalendar() {
  return (
    <BrowserOnly>
      {() => <CalendarComponent />}
    </BrowserOnly>
  );
}