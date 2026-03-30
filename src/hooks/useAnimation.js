import { useState, useCallback } from 'react'

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [danceStyle, setDanceStyle] = useState('bounce')

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed)
  }, [])

  const changeDanceStyle = useCallback((style) => {
    setDanceStyle(style)
  }, [])

  return { isPlaying, speed, danceStyle, togglePlay, changeSpeed, changeDanceStyle }
}
