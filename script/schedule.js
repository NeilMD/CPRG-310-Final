// Your Google API Key and the Calendar ID
const API_KEY = 'AIzaSyCWLfqXiZ_DCeUDGYbx2HQyy1JzwW83Kps';  // Replace with your actual API key
const CALENDAR_ID = 'aws.neilcapistrano@gmail.com'; // Replace with your Calendar ID

// Calendar
var calendarEl = document.getElementById('calendar');
let calendar = new FullCalendar.Calendar(calendarEl, {
    googleCalendarApiKey: API_KEY,
    events: {
      googleCalendarId: CALENDAR_ID
    },
    eventMouseEnter: function (ev) {
        console.log(ev)
       
        let tooltipHTML = `
            <article>
                <h3>${ev.event.title}</h3>
                <h4>${ev.event.start.toLocaleDateString()}</h4>
                <span>${ev.event._def.extendedProps.description || 'No details set'}</span>
            </article>
        `;

        tippy(ev.el, {
            content: tooltipHTML,
            allowHTML: true,
          });
    },
    eventMouseLeave: function (event) {
       
    }
  });
calendar.render();

// Set Event in Google

const addEvent = () => {
    // const title = document.getElementById("title").value;
    // const desc = document.getElementById("desc").value;
    // const date = document.getElementById("date").value;
    // const start = document.getElementById("st").value;
    // const end = document.getElementById("et").value;
    
    const title = 'test';
    const desc = 'test descript';
    const date = '2024-11-30';
    const start = '12:00';
    const end = '13:00';

    const startTime = new Date(date + "," + start).toISOString();
    const endTime = new Date(date + "," + end).toISOString();
  
    // var event = {
    //   summary: title,
    //   location: "Google Meet",
    //   description: desc,
    //   start: {
    //     dateTime: startTime,
    //     timeZone: "America/Los_Angeles"
    //   },
    //   end: {
    //     dateTime: endTime,
    //     timeZone: "America/Los_Angeles"
    //   },
    //   recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    //   attendees: [
    //     { email: "abc@google.com" },
    //     { email: "xyz@google.com" }
    //   ],
    //   reminders: {
    //     useDefault: false,
    //     overrides: [
    //       { method: "email", minutes: 24 * 60 },
    //       { method: "popup", minutes: 10 }
    //     ]
    //   }
    // };
  
    const event = {
        summary: 'Test Event',  // Title of the event
        location: '123 Main St, City',  // Location
        description: 'This is a test event.',  // Description
        start: {
            dateTime: '2024-12-01T10:00:00-07:00',  // Start date/time
            timeZone: 'America/Denver'  // Timezone
        },
        end: {
            dateTime: '2024-12-01T11:00:00-07:00',  // End date/time
            timeZone: 'America/Denver'  // Timezone
        }
    };
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Event created: ', data);
        alert('Event successfully added to Google Calendar');
    })
    .catch(error => {
        console.error('Error creating event:', error);
    });
};

