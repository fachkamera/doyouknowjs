import success from '@/assets/success.mp3'
import fail from '@/assets/fail.mp3'
import whoosh from '@/assets/whoosh.mp3'

interface AudioPlayerHook {
  playSuccess: () => void
  playFail: () => void
  playWhoosh: () => void
}

const audioCache = new Map<string, HTMLAudioElement>()

const getAudio = (src: string): HTMLAudioElement => {
  let audio = audioCache.get(src)
  if (!audio) {
    audio = new Audio(src)
    audioCache.set(src, audio)
  }
  return audio
}

const play = (src: string) => () => {
  const audio = getAudio(src)
  audio.currentTime = 0
  audio.play()
}

const useSfx = (): AudioPlayerHook => ({
  playSuccess: play(success),
  playFail: play(fail),
  playWhoosh: play(whoosh),
})

export default useSfx
