import { useState, useEffect } from 'react'
import success from '@/assets/success.mp3'
import fail from '@/assets/fail.mp3'
import whoosh from '@/assets/whoosh.mp3'

interface AudioPlayerHook {
  playSuccess: () => void
  playFail: () => void
  playWhoosh: () => void
}

const audioCache: { [key: string]: HTMLAudioElement } = {}

const useSfx = (): AudioPlayerHook => {
  const [successAudio, setSuccessAudio] = useState<HTMLAudioElement | null>(null)
  const [failAudio, setFailAudio] = useState<HTMLAudioElement | null>(null)
  const [whooshAudio, setWhooshAudio] = useState<HTMLAudioElement | null>(null)

  const setAudio = (setFn: (audioEl: HTMLAudioElement) => void, src: string) => {
    const audio = audioCache[src] || new Audio(src)
    audioCache[src] = audio
    setFn(audio)
  }
  useEffect(() => {
    setAudio(setSuccessAudio, success)
    setAudio(setFailAudio, fail)
    setAudio(setWhooshAudio, whoosh)
    return () => {
      // pause all
    }
  }, [])

  const play = (audio: HTMLAudioElement | null) => () => {
    if (!audio) return
    audio.currentTime = 0
    audio.play()
  }
  const playSuccess = play(successAudio)
  const playFail = play(failAudio)
  const playWhoosh = play(whooshAudio)

  return { playSuccess, playFail, playWhoosh }
}

export default useSfx
