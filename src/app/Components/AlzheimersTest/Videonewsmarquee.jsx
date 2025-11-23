"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Instagram, Youtube, ExternalLink } from "lucide-react";

// Custom Muted Icon (Instagram style)
const MutedVolumeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

const videos = [
  {
    id: 1,
    title: "Revolutionary Alzheimer's Blood Test Launch",
    description: "Dr. Dangs Lab introduces groundbreaking PrecivityAD2™ blood test for early Alzheimer's detection in India.",
    videoUrl: "PhotosAndLogos/video2-Alzheimer.mp4",
    format: "instagram",
    platform: "Instagram",
    newsLink: "https://www.instagram.com/p/DPF8-o3jRpY/"
  },
  {
    id: 2,
    title: "60-Second Brain Health Tips",
    description: "Quick tips for maintaining cognitive health. Follow us for daily wellness advice.",
    videoUrl: "PhotosAndLogos/video1-Alzheimer.mp4",
    format: "instagram",
    platform: "Instagram",
    newsLink: "https://www.instagram.com/p/DO966Fvkucx/"
  },
  {
    id: 3,
    title: "Complete Guide to Cognitive Assessment",
    description: "Delhi  CEO of Dr Dangs Lab, Dr Arjun Dang says, There's a huge gap in Alzheimer's diagnosis in India.",
    videoUrl: "PhotosAndLogos/videoplayback1.mp4",
    format: "shorts",
    platform: "YouTube Shorts",
    newsLink: "https://www.youtube.com/watch?app=desktop&feature=shared&v=syDuGB5cOVQ"
  },
  {
    id: 4,
    title: "Alzheimer's diagnosis in India",
    description: "| Delhi | CEO of Dr Dangs Lab, Dr Arjun Dang says, There's a huge gap in Alzheimer's diagnosis in India. Currently, what is available is not very accessible... The other form of diagnosis is through your spinal fluid.",
    thumbnail: "PhotosAndLogos/drarjun.jpg",
    format: "news",
    platform: "News",
    newsLink: "https://x.com/ANI/status/1969605000453120271?t=X3TY4u28RGUJctjFJjvP3g&s=08"
  },
  
  {
    id: 6,
    title: "New test for Alzheimer’s, non-invasive and FDA-approved, now available in India",
    description: "A new non-invasive test for detecting Alzheimer’s Disease, which has already been approved by the US Food and Drug Administration (USFDA), has been introduced in India. Developed by Dr Dangs Labs, the test is known as Dendrite Dx, a bundle of tests that includes a 15-20 minute quiz and can be taken easily by anyone for the diagnosis of the neurodegenerative condition.",
    thumbnail: "PhotosAndLogos/dx1.webp",
    format: "news",
    platform: "News",
    newsLink: "https://indianexpress.com/article/health-wellness/new-test-alzheimer-fda-approved-available-india-early-symptoms-10268433/"
  },
  {
    id: 7,
    title: "Delhi lab launches non-invasive Alzheimer’s diagnosis",
    description: "Dr Dangs Lab in Delhi has launched a non-invasive early detection test — Dendrite Dx — for Alzheimer’s disease on the occasion of World Alzheimer’s Day on Sunday, the company informed.",
    thumbnail: "PhotosAndLogos/city.avif",
    format: "news",
    platform: "News",
    newsLink: "https://www.hindustantimes.com/cities/delhi-news/delhi-lab-launches-non-invasive-alzheimer-s-diagnosis-101758480319190.html"
  },
  {
    id: 8,
    title: "Non-invasive test to catch early signs of Alzheimer’s now in India. How it works, how much will it cost",
    description: "The test, Dendrite Dx, launched by Dr Dangs Labs, includes a 15-minute FDA-cleared cognitive assessment, advanced blood biomarkers to detect key proteins suggesting the condition and a proprietary APS2 result through collaboration with a US-based diagnostic lab in patients with signs of cognitive impairment.",
    thumbnail: "PhotosAndLogos/Alzheimers-Trees.jpg",
    format: "news",
    platform: "News",
    newsLink: "https://theprint.in/health/non-invasive-test-to-catch-early-signs-of-alzheimers-now-in-india-how-it-works-how-much-will-it-cost/2748370/"
  },
];

const VideoCard = ({ 
  video,
  isActive, 
  isMobile, 
  isTablet,
  onTogglePlay, 
  isPlaying, 
  isMuted, 
  onToggleMute 
}) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Handle video playback
  useEffect(() => {
    if (!videoRef.current || video.format === 'news') return;
    
    let shouldPlay = false;
    
    if (isMobile || isTablet) {
      shouldPlay = isPlaying;
    } else {
      shouldPlay = isActive || isPlaying;
    }
    
    if (shouldPlay) {
      setIsLoading(true);
      videoRef.current.play()
        .then(() => {
          setIsLoading(false);
          setHasError(false);
        })
        .catch((error) => {
          console.log("Video playback failed:", error);
          setIsLoading(false);
          if (error.name !== 'NotAllowedError') {
            setHasError(true);
          }
        });
    } else {
      videoRef.current.pause();
      setIsLoading(false);
      
      if (!isMobile && !isTablet && !isActive && !isPlaying) {
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive, isMobile, isTablet, isPlaying, video.format]);

  useEffect(() => {
    if (!videoRef.current || video.format === 'news') return;
    videoRef.current.muted = isMuted;
  }, [isMuted, video.format]);

  const handleVideoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onTogglePlay();
  };

  const handleMuteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleMute();
  };

  useEffect(() => {
    if (videoRef.current && video.format !== 'news') {
      videoRef.current.load();
    }
  }, [video.videoUrl, video.format]);

  const getPlatformIcon = () => {
    switch (video.platform) {
      case "Instagram":
        return <Instagram size={14} />;
      case "YouTube Shorts":
      case "YouTube":
        return <Youtube size={14} />;
      default:
        return <ExternalLink size={14} />;
    }
  };

  const getGradientClass = () => {
    switch (video.format) {
      case "instagram":
        return "from-purple-500 via-pink-500 to-orange-400";
      case "shorts":
        return "from-red-500 via-red-600 to-red-700";
      case "news":
        return "from-blue-700 via-blue-800 to-blue-900";
      default:
        return "from-red-600 via-red-500 to-red-600";
    }
  };

  const isVertical = video.format === 'instagram' || video.format === 'shorts';

  return (
    <div 
      className={`flex-shrink-0 p-2 transition-transform duration-200 hover:scale-105 ${
        isVertical 
          ? 'w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[24vw] xl:w-[20vw]' 
          : 'w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[35vw] xl:w-[28vw] flex items-center'
      }`}
    >
      <div className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${getGradientClass()} p-[2px] h-full`}>
        <div className="bg-white dark:bg-gray-800 rounded-[14px] overflow-hidden h-full flex flex-col">
          {/* Platform Badge */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
              {getPlatformIcon()}
              <span>{video.platform}</span>
            </div>
            {(isActive || isPlaying) && !hasError && video.format !== 'news' && (
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            )}
          </div>

          {/* Video / Thumbnail Container */}
          <div className={`relative bg-black overflow-hidden ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
            {/* If this is a news card and has a thumbnail, show image instead of video */}
            {video.format === 'news' && video.thumbnail ? (
              <a href={video.newsLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full group">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </a>
            ) : (
              <video
                ref={videoRef}
                src={video.videoUrl}
                loop
                playsInline
                preload="metadata"
                muted={isMuted}
                className={`w-full h-full transition-transform duration-300 hover:scale-105 ${
                  isVertical ? 'object-contain' : 'object-cover'
                }`}
                onClick={handleVideoClick}
                onLoadedData={() => setIsLoading(false)}
                onError={() => setHasError(true)}
              />
            )}

            {/* Loading */}
            {isLoading && video.format !== 'news' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-10 h-10 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
            
            {/* Error State */}
            {hasError && video.format !== 'news' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-white text-center p-4">
                  <p className="text-sm">Unable to load video</p>
                </div>
              </div>
            )}
            
            {/* Play/Pause Button - Only for non-news videos */}
            {video.format !== 'news' && (
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                {!hasError && !isLoading && (
                  <button
                    onClick={handleVideoClick}
                    className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                )}
              </div>
            )}

            {/* Mute Button - Only for non-news videos */}
            {video.format !== 'news' && (isActive || isPlaying) && !hasError && (
              <button
                onClick={handleMuteClick}
                className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <MutedVolumeIcon size={16} /> : <Volume2 size={16} />}
              </button>
            )}

            {/* Format-specific overlays */}
            {isVertical && (isActive || isPlaying) && ( 
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-3 px-3">
                <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">{video.title}</h3>
                <p className="text-white/90 text-xs line-clamp-2">{video.description}</p>
              </div>
            )}

            {video.format === 'news' && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent">
                <div className="px-3 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Breaking News</span>
                </div>
              </div>
            )}

            {/* Progress Bar - Only for non-news videos */}
            {video.format !== 'news' && isPlaying && !hasError && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                <div 
                  className="h-full bg-white/80"
                  style={{
                    animation: 'progress 10s linear infinite'
                  }}
                />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-3 flex-grow flex flex-col justify-between bg-white dark:bg-gray-800">
            {!isVertical && (
              <div>
                <h3 className="font-semibold text-sm text-gray-800 dark:text-white mb-1 line-clamp-2 leading-tight">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
              </div>
            )}
            
            <a 
              href={video.newsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 mt-2 group"
            >
              {video.format === 'news' ? 'Read Full Story' : `View on ${video.platform}`}
              <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function VideoNewsMarquee() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const updateScrollButtons = useCallback(() => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    updateScrollButtons();
    scrollContainer.addEventListener('scroll', updateScrollButtons);
    
    return () => scrollContainer.removeEventListener('scroll', updateScrollButtons);
  }, [updateScrollButtons]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = isMobile 
      ? container.clientWidth * 0.85 
      : isTablet 
        ? container.clientWidth * 0.50 
        : container.clientWidth * 0.35;
    const scrollAmount = cardWidth + 16;

    const targetScroll = direction === "right" 
      ? container.scrollLeft + scrollAmount
      : container.scrollLeft - scrollAmount;

    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  const handleMouseEnter = (index) => {
    if (!isMobile && !isTablet) {
      setActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && !isTablet) {
      setActiveIndex(null);
      if (playingIndex === activeIndex) {
        setPlayingIndex(null);
      }
    }
  };

  const handleTogglePlay = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
      setActiveIndex(index);
    }
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full py-8 bg-white">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Latest  News
        </h2>
        <p className="text-gray-900 max-w-2xl mx-auto">
          Stay updated with our latest breakthroughs in brain health diagnostics across platforms
        </p>
      </div>

      {/* Navigation Buttons */}
      {!isMobile && (
        <>
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110`}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
          </button>
        </>
      )}

      {/* Video Slider */}
      <div
        ref={scrollRef}
        className="flex -mt-5 -mb-5  items-center gap-2 px-4 sm:px-16 overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', minHeight: '600px' }}
      >
        {videos.map((video, idx) => (
          <div
            key={video.id}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <VideoCard 
              video={video}
              isActive={activeIndex === idx}
              isMobile={isMobile}
              isTablet={isTablet}
              onTogglePlay={() => handleTogglePlay(idx)}
              isPlaying={playingIndex === idx}
              isMuted={isMuted}
              onToggleMute={handleToggleMute}
            />
          </div>
        ))}
      </div>

      {/* Scroll Indicators */}
      {(isMobile || isTablet) && (
        <div className="flex justify-center mt-6 gap-2">
          {videos.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === Math.floor((scrollRef.current?.scrollLeft || 0) / (scrollRef.current?.clientWidth || 1))
                  ? 'w-8 bg-blue-600'
                  : 'w-1.5 bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      )}

      

      
    </div>
  );
}