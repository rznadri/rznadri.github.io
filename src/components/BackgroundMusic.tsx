import React, { useEffect, useRef } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const pannerRef = useRef<StereoPannerNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const lastScrollY = useRef(0);
  const baseVolume = 0.1; // Base volume level
  const volumeStep = 0.005; // How much to change volume per scroll

  useEffect(() => {
    // Create audio element and Web Audio API context
    audioRef.current = new Audio('/music.mp3');
    audioContextRef.current = new AudioContext();
    
    if (audioRef.current && audioContextRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = baseVolume;

      // Create audio source and panner nodes
      sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
      pannerRef.current = audioContextRef.current.createStereoPanner();
      
      // Connect the audio nodes
      sourceRef.current.connect(pannerRef.current);
      pannerRef.current.connect(audioContextRef.current.destination);
      
      // Set initial pan to full left (-1)
      if (pannerRef.current) {
        pannerRef.current.pan.value = -1;
      }
    }

    // Function to handle scroll
    const handleScroll = () => {
      if (!audioRef.current || !pannerRef.current) return;

      const currentScroll = window.scrollY;
      const scrollDelta = currentScroll - lastScrollY.current;
      
      // Calculate new volume
      let newVolume = audioRef.current.volume;
      if (scrollDelta > 0) {
        // Scrolling down - increase volume
        newVolume = Math.min(1, newVolume + volumeStep);
      } else if (scrollDelta < 0) {
        // Scrolling up - decrease volume
        newVolume = Math.max(0.1, newVolume - volumeStep);
      }

      // Apply new volume
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }

      // Calculate pan based on scroll position
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      const panValue = -1 + (scrollPercentage * 2); // Maps 0->-1 (left) and 1->1 (right)
      
      // Apply pan value
      if (pannerRef.current) {
        pannerRef.current.pan.value = panValue;
      }

      lastScrollY.current = currentScroll;
    };

    // Throttle the scroll handler to improve performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Function to start playing on user interaction
    const startMusic = () => {
      if (audioRef.current && audioContextRef.current) {
        audioContextRef.current.resume().then(() => {
          audioRef.current?.play().catch(error => {
            console.log('Audio playback failed:', error);
          });
        });
        // Remove event listeners after first interaction
        document.removeEventListener('click', startMusic);
        document.removeEventListener('touchstart', startMusic);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', scrollListener, { passive: true });
    document.addEventListener('click', startMusic);
    document.addEventListener('touchstart', startMusic);

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      window.removeEventListener('scroll', scrollListener);
      document.removeEventListener('click', startMusic);
      document.removeEventListener('touchstart', startMusic);
      
      audioRef.current = null;
      audioContextRef.current = null;
      pannerRef.current = null;
      sourceRef.current = null;
    };
  }, []);

  return null;
};

export default BackgroundMusic;
