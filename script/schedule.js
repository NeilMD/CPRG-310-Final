// Calendar
var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    eventSources: [

        // your event source
        {
          events: [ // put the array in the `events` property
            {
              title  : 'event1',
              start  : '2024-11-30'
            },
            {
              title  : 'event2',
              start  : '2024-11-10',
              end    : '2024-11-17'
            },
            {
              title  : 'event3',
              start  : '2024-12-01',
            }
          ],
          color: '#2c3e50',     // an option!
          textColor: 'white' // an option!
        }
    
        // any other event sources...
    
    ]
});
calendar.render();

