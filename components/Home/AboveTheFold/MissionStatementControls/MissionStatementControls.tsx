import CSS from './MissionStatementControls.module.css'
import {
  BsChevronLeft,
  BsChevronRight,
  BsPlayFill,
  BsPauseFill,
} from 'react-icons/bs'
import { useGlobalIntervalContext } from '../../../../context/GlobalInterval'

type Props = {
  fadingOut: boolean
}

const MissionStatementControls = ({ fadingOut }: Props) => {
  const { forceNext, forcePrevious, autoPlay, setAutoPlay } =
    useGlobalIntervalContext()

  return (
    <section
      className={CSS.flexContainer}
      style={{
        ...(fadingOut
          ? {
              transition: 'opacity .2s',
              opacity: 0,
            }
          : {}),
      }}
    >
      <button className={CSS.button}>
        <BsChevronLeft onClick={forcePrevious} size={16} />
      </button>

      {autoPlay ? (
        <button onClick={() => setAutoPlay(false)} className={CSS.button}>
          <BsPauseFill size={16} />
        </button>
      ) : (
        <button onClick={() => setAutoPlay(true)} className={CSS.button}>
          <BsPlayFill size={16} />
        </button>
      )}

      <button onClick={forceNext} className={CSS.button}>
        <BsChevronRight size={16} />
      </button>
    </section>
  )
}

export default MissionStatementControls
