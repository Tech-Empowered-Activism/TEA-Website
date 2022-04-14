import CircuitTree from './CircuitTree'
import CSS from './Sustainability.module.css'
import { useColorContext } from '../../../context/CMY'

const Sustainability = () => {
  const { currentLogoValue } = useColorContext()

  return (
    <main className={CSS.container}>
      <section className={CSS.textContainer}>
        <h1
          style={{
            color: currentLogoValue,
            transition: 'var(--color-transition)',
          }}
        >
          Sustainable systems for a sustainable economy.
        </h1>
        <p>Our economy can&apos;t count on growth ad infinitum.</p>
        <p>
          From revenue to source code, everything we build is transparent and
          auditable&mdash;whether it&apos;s new software or ethical, sustainable
          alternatives to popular software.
        </p>
      </section>

      <div className={CSS.backgroundImageContainer}>
        <CircuitTree />
      </div>
    </main>
  )
}

export default Sustainability
