import React from 'react';

const UpcomingEvents = () => {
    // Sample event data - replace with your actual data
    const events = [
        {
            id: 1,
            title: "test",
            subtitle: "test",
            date: "17/05/2025",
            time: "02:19 pm",
            location: "tets",
            description: "an...",
            image: "https://i.postimg.cc/yNXYdNzk/img3.png"
        },
        {
            id: 2,
            title: "தமிழ் அரிச்சுவடி",
            subtitle: "தமிழ் அரிச்சுவடி",
            date: "23/05/2025",
            time: "08:17 am",
            location: "USA",
            description: "fkjs...",
            image: "https://i.postimg.cc/yNXYdNzk/img3.png"
        },
        {
            id: 2,
            title: "தமிழ் அரிச்சுவடி",
            subtitle: "தமிழ் அரிச்சுவடி",
            date: "23/05/2025",
            time: "08:17 am",
            location: "USA",
            description: "fkjs...",
            image: "https://i.postimg.cc/yNXYdNzk/img3.png"
        },
        // Add more events as needed
    ];

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto"
                data-aos="fade-up"
            >
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Upcoming Events
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join us for these exciting celebrations of Tamil culture and talent
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                            data-aos="fade-left"
                            data-aos-duration="2000"

                        >
                            {/* Event Image */}
                            <div className="relative h-48 bg-gray-200">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-md">
                                    Upcoming
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 mb-1">
                                    {event.subtitle}
                                </p>

                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {event.date}
                                    </div>

                                    <div className="flex items-center text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {event.time}
                                    </div>

                                    <div className="flex items-center text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {event.location}
                                    </div>
                                </div>

                                <p className="text-gray-600 mt-4 mb-6">
                                    {event.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex space-x-3 mt-auto">
                                    <button className="flex-1 bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition-colors duration-200">
                                        Details
                                    </button>
                                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors duration-200">
                                        Get Tickets
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;