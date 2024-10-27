import React from 'react';

const eventsData = [
  {
    id: 1,
    name: 'Posture Improvement Workshop',
    date: 'October 30, 2024',
    time: '10:00 AM - 12:00 PM',
    description: 'A workshop focusing on techniques to improve posture and reduce back pain.',
  },
  {
    id: 2,
    name: 'Joint Mobility Class',
    date: 'November 5, 2024',
    time: '1:00 PM - 3:00 PM',
    description: 'An interactive class aimed at enhancing joint mobility and flexibility.',
  },
  {
    id: 3,
    name: 'Balance and Stability Training',
    date: 'November 12, 2024',
    time: '9:00 AM - 11:00 AM',
    description: 'Training focused on improving balance and preventing falls.',
  },
  // Add more events as needed
];

const Events = () => {
  const handleScheduleEvent = (eventName) => {
    // Placeholder function to handle scheduling
    alert(`You have scheduled the event: ${eventName}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">Upcoming Physical Therapy Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-xl font-semibold mb-2 text-primary">{event.name}</h2>
            <p className="text-gray-700 mb-3">{event.description}</p>
            <p className="text-gray-500 mb-1"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-500 mb-4"><strong>Time:</strong> {event.time}</p>
            <button
              onClick={() => handleScheduleEvent(event.name)}
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-200"
            >
              Schedule Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
