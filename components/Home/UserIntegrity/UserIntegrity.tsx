import CircuitUser from './CircuitUser'
import CSS from './UserIntegrity.module.css'

import { useColorContext } from '../../../context/CMY'

const UserIntegrity = () => {
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
            Software should serve users. It shouldn&apos;t serve users on a
            silver platter.
          </h1>
          <p>
            We&apos;re not out to make a profit. We&apos;re out to revolutionize
            a new ethos of what software utilities could look like for the
            people that use it.
          </p>
        </section>

        <div className={CSS.backgroundImageContainer}>
          <CircuitUser />
        </div>
      </main>
      <div className={CSS.spacer} />
    </>
  )
}

export default UserIntegrity
