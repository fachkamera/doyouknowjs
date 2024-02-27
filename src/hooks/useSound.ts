import { useState, useEffect } from 'react'
import { Howl } from 'howler'

const useSound = (src: string, volume = 1.0, loop = false) => {
  const [sound, setSound] = useState<Howl | null>(null)

  useEffect(() => {
    const sound = new Howl({
      src: [src],
      volume,
      loop,
    })

    setSound(sound)

    return () => {
      if (sound) {
        sound.unload()
      }
    }
  }, [src, volume, loop])

  const play = () => {
    if (sound) {
      sound.play()
    }
  }

  return play
}

export default useSound
