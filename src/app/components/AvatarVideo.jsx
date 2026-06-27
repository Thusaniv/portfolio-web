"use client";
import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AvatarVideo() {
  const [activeVideo, setActiveVideo] = useState("avatar1");
  const [isMuted, setIsMuted] = useState(true);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  // Synchronize mute status across both video elements
  useEffect(() => {
    if (video1Ref.current) video1Ref.current.muted = isMuted;
    if (video2Ref.current) video2Ref.current.muted = isMuted;
  }, [isMuted]);

  // Initial autoplay setup (attempt unmuted first, fall back to muted)
  useEffect(() => {
    const playVideo = (videoRef) => {
      if (!videoRef.current) return;
      videoRef.current.muted = false;
      setIsMuted(false);

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay unmuted blocked by browser policy, fall back to muted autoplay
          setIsMuted(true);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch((err) => console.log("Muted autoplay blocked:", err));
          }
        });
      }
    };

    if (activeVideo === "avatar1") {
      playVideo(video1Ref);
    } else {
      playVideo(video2Ref);
    }
  }, [activeVideo]);

  // Intersection Observer to pause when scrolled out of view and resume when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const activeRef = activeVideo === "avatar1" ? video1Ref : video2Ref;
        if (activeRef.current) {
          if (entry.isIntersecting) {
            activeRef.current.play().catch((err) => console.log("Observer play failed:", err));
          } else {
            activeRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    const container = document.getElementById("avatar-video-container");
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [activeVideo]);

  const handleVideo1Ended = () => {
    setActiveVideo("avatar2");
    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play().catch((err) => console.log("Failed playing video 2:", err));
    }
    if (video1Ref.current) {
      video1Ref.current.pause();
    }
  };

  const handleVideo2Ended = () => {
    setActiveVideo("avatar1");
    if (video1Ref.current) {
      video1Ref.current.currentTime = 0;
      video1Ref.current.play().catch((err) => console.log("Failed playing video 1:", err));
    }
    if (video2Ref.current) {
      video2Ref.current.pause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  return (
    <div id="avatar-video-container" className="w-full h-full relative flex items-center justify-end select-none">
      {/* Dynamic Glow Behind Video */}
      <div className="absolute right-0 w-[80%] h-[80%] bg-blue-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Borderless screen-blended video container with all-side rectangular edge feathering mask & scaling */}
      <div 
        className="relative w-full h-[500px] sm:h-[600px] lg:h-full overflow-hidden scale-105 lg:scale-[1.5] transition-transform duration-500 flex justify-end"
        style={{
          // Custom linear gradients combined to feather the left 55% (under text) and the top, bottom, and right outer edges softly
          maskImage: "linear-gradient(to right, transparent 0%, black 55%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 55%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "destination-in"
        }}
      >


        {/* Video 1 (avatar1) */}
        <video
          ref={video1Ref}
          src="/videos/avatar1.mp4"
          preload="auto"
          autoPlay
          playsInline
          onEnded={handleVideo1Ended}
          className={`h-full w-auto object-contain object-right mix-blend-screen transition-opacity duration-700 absolute inset-0 left-auto right-0 ${
            activeVideo === "avatar1" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        />

        {/* Video 2 (avatar2) */}
        <video
          ref={video2Ref}
          src="/videos/avatar2.mp4"
          preload="auto"
          playsInline
          onEnded={handleVideo2Ended}
          className={`h-full w-auto object-contain object-right mix-blend-screen transition-opacity duration-700 absolute inset-0 left-auto right-0 ${
            activeVideo === "avatar2" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        />

        {/* Small floating status indicator */}
        <div className="absolute top-6 right-6 font-mono text-[9px] text-blue-400/40 bg-slate-950/40 border border-blue-500/10 px-2 py-0.5 rounded backdrop-blur-sm pointer-events-none z-20">
          HOLO_INTRO_SYS: ACTIVE
        </div>

        {/* Minimized Mute/Unmute Icon Float Toggle (Clean clean overlay) */}
        <button
          onClick={toggleMute}
          className={`absolute bottom-6 right-12 p-2.5 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 shadow-md border z-30 ${
            isMuted
              ? "bg-red-500/20 border-red-500/30 text-red-400 hover:bg-red-500/30"
              : "bg-blue-600/30 border-blue-500/40 text-blue-400 hover:bg-blue-600/40 hover:text-white"
          }`}
          title={isMuted ? "Unmute Intro Audio" : "Mute Intro Audio"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 animate-pulse" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>

    </div>
  );
}
