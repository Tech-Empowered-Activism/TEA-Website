import CircuitCircle from './CircuitCircle'
import CSS from './SupportSystem.module.css'
import { useColorContext } from '../../../context/CMY'

const SupportSystem = () => {
  const { currentLogoValue } = useColorContext()
  return (
    <>
      <div className={CSS.spacer} />

      <main className={CSS.container}>
        <section className={CSS.textContainer}>
          <h1
            style={{
              color: currentLogoValue,
              transition: 'var(--color-transition)',
            }}
          >
            A support system for building support systems.
          </h1>
          <p>
            Whether you&apos;re looking to collaborate on a project, or you have
            a project of your own, we&apos;re a support system providing
            accountability, solidarity, and mentorship.
          </p>
          <p>
            We meet once a week for heads-down work or group collaboration time,
            and once a week for pitches, brainstorming, progress reports, and
            retrospectives.
          </p>
        </section>

        <div className={CSS.backgroundImageContainer}>
          <CircuitCircle />
        </div>
      </main>

      <div className={`${CSS.spacer} ${CSS.last}`} />
    </>
  )
}
export default SupportSystem
