import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { AudioLoader, AudioListener, Audio } from 'three';
import Music from "../../public/Music.mp3";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const listenerRef = useRef(null);
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    
    const listener = new AudioListener();
    listenerRef.current = listener;

    
    const sound = new Audio(listener);
    audioRef.current = sound;

    
    const audioLoader = new AudioLoader();
    audioLoader.load(Music, (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true); 
      sound.setVolume(0.5);
      setAudioLoaded(true);
    });
  }, []);

  const handlePlayAudio = () => {
    if (audioLoaded && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStopAudio = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.stop();
      setIsPlaying(false); 
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      handleStopAudio();
    } else {
      handlePlayAudio();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, handlePlayAudio, handleStopAudio, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  return useContext(AudioContext);
};
