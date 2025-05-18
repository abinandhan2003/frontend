import React, { useEffect, useRef, useState } from 'react';
import Intro from '../img/Brand.mp4';

const VideoSection = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true); // Start muted to ensure autoplay works
    const [isPlaying, setIsPlaying] = useState(false);

    // Function to handle intersection observer callback
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ensure video is muted initially for autoplay to work reliably
                videoRef.current.muted = true;
                setIsMuted(true);
                
                // Try to play the video
                videoRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                });
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        });
    };

    useEffect(() => {
        // Set up intersection observer to detect when video is in viewport
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3 // 30% of the video needs to be visible
        });
        
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        // Clean up observer on component unmount
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    // Toggle mute/unmute
    const toggleMute = (e) => {
        e.stopPropagation(); // Prevent this from triggering play/pause
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    // Toggle play/pause
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(e => console.log(e));
            }
        }
    };

    return (
        <section className="bg-[#f5e6c0] py-16">
            <div className="container mx-auto px-4">
               
                {/* Video Container */}
                <div className="max-w-4xl mx-auto relative rounded-xl overflow-hidden shadow-2xl">
                    {/* Video Overlay - Optional decoration */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20"></div>

                    {/* Autoplay Video Player (no controls) */}
                    <div 
                        className="relative z-10 aspect-w-16 aspect-h-9 rounded-xl overflow-hidden flex items-center justify-center bg-black cursor-pointer"
                        onClick={togglePlayPause}
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            playsInline
                            loop
                            muted={isMuted}
                            poster="/path/to/thumbnail.jpg"
                        >
                            <source src={Intro} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                        {/* Play/Pause overlay */}
                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        )}
                        
                        {/* Sound control with notice */}
                        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                            {isMuted && isPlaying && (
                                <div className="bg-black bg-opacity-50 text-white text-xs py-1 px-2 rounded-full">
                                    Click for sound
                                </div>
                            )}
                            <button
                                onClick={toggleMute}
                                className="bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all z-20"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;