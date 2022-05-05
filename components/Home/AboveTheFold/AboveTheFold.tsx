import { useEffect, useState, useMemo } from 'react'

import Logo from '../../Logo/Logo'
import MissionStatement from '../MissionStatement'
import MissionStatementControls from './MissionStatementControls'

import { useColorContext } from '../../../context/CMY'
import { useDebounce } from '../../../hooks'
import { LOGO_MIN_WIDTH, LOGO_MAX_WIDTH } from './config'

import CSS from './AboveTheFold.module.css'

enum MissionStatementPosition {
  Absolute = 'absolute',
  Fixed = 'fixed',
}

const FADE_DURATION = 200

const AboveTheFold = () => {
  const { currentLogoValue } = useColorContext()

  const [currentScrollPosition, setCurrentScrollPosition] = useState(0)
  const debouncedScrollPosition: number = useDebounce<number>(
    currentScrollPosition,
    2,
  )
  const [missionStatementPosition, setMissionStatementPosition] = useState(
    MissionStatementPosition.Fixed,
  )
  const [shouldDisplayControls, setShouldDisplayControls] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)

  const handleScroll = () => {
    if (typeof window === 'undefined') return
    setCurrentScrollPosition(window.pageYOffset)
  }

  // Register event listener for scrollY
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  // Once scroll position exceeds footer threshold, position it absolute; else, position it fixed again
  useEffect(() => {
    if (typeof window === 'undefined') return

    const footerHeight = document
      .getElementById('footer')
      .getBoundingClientRect().height

    const viewportBottom = currentScrollPosition + window.innerHeight

    if (
      viewportBottom >= document.body.clientHeight - footerHeight &&
      missionStatementPosition !== MissionStatementPosition.Absolute
    )
      return setMissionStatementPosition(MissionStatementPosition.Absolute)

    if (
      viewportBottom < document.body.clientHeight - footerHeight &&
      missionStatementPosition !== MissionStatementPosition.Fixed
    )
      setMissionStatementPosition(MissionStatementPosition.Fixed)
  }, [currentScrollPosition, missionStatementPosition])

  const percentOfAboveTheFoldViewport = useMemo(() => {
    if (typeof window === 'undefined') return 0
    return Math.min(1, debouncedScrollPosition / window.innerHeight)
  }, [debouncedScrollPosition])

  const logoPixelWidth = useMemo(() => {
    if (typeof window === 'undefined') return LOGO_MAX_WIDTH
    return Math.max(
      LOGO_MIN_WIDTH,
      LOGO_MAX_WIDTH - percentOfAboveTheFoldViewport * LOGO_MAX_WIDTH,
    )
  }, [percentOfAboveTheFoldViewport])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!shouldDisplayControls) {
      timeout = setTimeout(() => {
        setFadingOut(false)
      }, FADE_DURATION)
    }

    return () => clearTimeout(timeout)
  }, [shouldDisplayControls])

  return (
    <>
      <aside
        onMouseEnter={() => setShouldDisplayControls(true)}
        onMouseLeave={() => {
          setShouldDisplayControls(false)
          setFadingOut(true)
        }}
        style={{
          display:
            missionStatementPosition === MissionStatementPosition.Absolute &&
            window.innerWidth <= 1100
              ? 'none'
              : 'flex',
          position: missionStatementPosition,
          bottom:
            missionStatementPosition === MissionStatementPosition.Fixed
              ? 'auto'
              : document.getElementById('footer').getBoundingClientRect()
                  .height,
        }}
        className={CSS.missionStatementContainer}
      >
        <MissionStatement />

        {(shouldDisplayControls || fadingOut) && (
          <MissionStatementControls fadingOut={fadingOut} />
        )}
      </aside>
      <main className={CSS.container}>
        <section className={CSS.mainContentContainer}>
          <div
            style={{
              width: `${logoPixelWidth}px`,
              willChange: 'width',
            }}
            className={CSS.logoContainer}
          >
            <Logo />
          </div>
        </section>
      </main>
    </>
  )
}

export default AboveTheFold
