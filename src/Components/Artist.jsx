import React from 'react';

const FeaturedTalents = () => {
    const artistData = [
        {
            id: 1,
            name: "Natyashastra Sri",
            role: "Dancer",
            description: "Bharatanatyam is a classical Indian dance form originating in South India, particularly Tamil Nadu, and is a highly specialized art with roots in the Natyashastra. It's known for its intricate combination of eye...",
            imageUrl: "https://i.postimg.cc/yNXYdNzk/img3.png"
        },
        {
            id: 1,
            name: "Abi",
            role: "Singer",
            description: "Bharatanatyam is a classical Indian dance form originating in South India, particularly Tamil Nadu, and is a highly specialized art with roots in the Natyashastra. It's known for its intricate combination of eye...",
            imageUrl: "https://i.postimg.cc/yNXYdNzk/img3.png"
        },
        {
            id: 1,
            name: "Puttu",
            role: "Dancer",
            description: "Bharatanatyam is a classical Indian dance form originating in South India, particularly Tamil Nadu, and is a highly specialized art with roots in the Natyashastra. It's known for its intricate combination of eye...",
            imageUrl: "https://i.postimg.cc/yNXYdNzk/img3.png"
        },
        {
            id: 1,
            name: "Puttu",
            role: "Dancer",
            description: "Bharatanatyam is a classical Indian dance form originating in South India, particularly Tamil Nadu, and is a highly specialized art with roots in the Natyashastra. It's known for its intricate combination of eye...",
            imageUrl: "https://i.postimg.cc/yNXYdNzk/img3.png"
        },

        // ...existing artist data
    ];

    return (
        <div className="container mx-auto py-12 px-4 bg-[#f5e6c0]">
            {/* Header Section - unchanged */}
            <div className="text-center mb-12"
                data-aos="fade-up"
            >
                <div className="bg-yellow-100 text-yellow-800 inline-block px-4 py-2 rounded-md mb-4">
                    Featured Talents
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-black-800 mb-4">
                    Meet Our Talented Artists
                </h2>

                <p className="text-gray-700 max-w-2xl mx-auto">
                    These exceptional Tamil artists have showcased their talents at our events.
                </p>
            </div>

            {/* Artist Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {artistData.map((artist) => (
                    <div key={artist.id} className="relative group">


                        {/* NEW Artist Card - replaced with UIverse design */}
                        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white  bg-gradient-to-r">
                                <img
                                    src={artist.imageUrl}
                                    alt={artist.name}
                                    className="h-full w-full object-cover opacity-80"
                                    data-aos="zoom-in"
                                    data-aos-duration="2000"
                                />
                            </div>
                            <div className="p-6">
                                <h5 className="mb-1 block font-sans text-xl font-semibold leading-snug tracking-normal text-red-800 antialiased">
                                    {artist.name}
                                </h5>
                                <p className="mb-3 text-gray-600 font-medium">
                                    {artist.role}
                                </p>
                                <p className="block font-sans text-sm leading-relaxed text-gray-700 antialiased">
                                    {artist.description}
                                </p>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="select-none rounded-lg bg-red-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedTalents;