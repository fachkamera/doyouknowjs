import successSfx from '@/assets/success.mp3'
import failSfx from '@/assets/nope.mp3'
import whooshSfx from '@/assets/whoosh.mp3'
import useSound from './useSound'

const useSounds = () => {
  const playWhoosh = useSound(whooshSfx)
  const playSuccess = useSound(successSfx)
  const playFail = useSound(failSfx)
  return {
    playWhoosh,
    playSuccess,
    playFail,
  }
}

export default useSounds
