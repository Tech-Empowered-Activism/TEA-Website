import { useColorContext } from '../../context/CMY'
import Logo from '../Logo'
import CSS from './Footer.module.css'

const Footer = () => {
  const { currentLogoValue, currentDirectObjectValue, currentSubjectValue } =
    useColorContext()
  return (
    <>
      <div className={CSS.spacer} />
      <footer id="footer" className={CSS.container}>
        <div className={CSS.clipPath} />

        <div className={CSS.flex}>
          <section className={CSS.logoContainer}>
            <Logo fill="#fffffa" />
          </section>

          <section className={CSS.links}>
            <div className={CSS.centerColumn}>
              <div className={CSS.column}>
                <h2>@Us</h2>
                <a
                  style={{
                    color: currentDirectObjectValue,
                    transition: 'var(--color-transition)',
                  }}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/equitea_denver"
                >
                  Twitter
                </a>
              </div>

              <div className={CSS.column}>
                <h2>Join</h2>
                <a
                  style={{
                    color: currentLogoValue,
                    transition: 'var(--color-transition)',
                  }}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.meetup.com/tech-against-late-stage-capitalism/"
                >
                  Meetup
                </a>
                <a
                  style={{
                    color: currentSubjectValue,
                    transition: 'var(--color-transition)',
                  }}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://discord.gg/44brbQVDdB"
                >
                  Discord
                </a>
              </div>

              <div className={CSS.column}>
                <h2>Build</h2>
                <h2>Sponsor</h2>
                <h2>Contact</h2>
                <a
                  style={{
                    color: currentDirectObjectValue,
                    transition: 'var(--color-transition)',
                  }}
                  rel="noopener noreferrer"
                  href="mailto:hi@teactivism.com"
                >
                  hi@teactivism.com
                </a>
              </div>

              <div className={CSS.details}>
                <h2>Mondays</h2>
                <p>Virtual, via gather.town</p>
                <p>6:30pm - 7:30pm (MDT)</p>
                <h2>Thursdays</h2>
                <p>In-person (or virtually)</p>
                <p>Bardo Coffee House (Broadway)</p>
                <p>6:00pm-ish - Whenever (MDT)</p>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}
export default Footer
