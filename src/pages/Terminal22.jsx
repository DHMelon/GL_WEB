import './Terminal22.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import t1 from '../assets/t1.webp'
import t2 from '../assets/t2.webp'
import t3 from '../assets/t3.webp'

function Terminal22() {
  useScrollReveal()

  const features = [
    {
      title: 'HACK YOUR WAY IN',
      description: 'Through the game you will need to hack into many different devices. This is done through navigating your way through a bullet hell arena and finding all of the "Security Nodes" in order to break the security of the machine and access it.',
      img: t1,
    },
    {
      title: 'DIG AROUND',
      description: 'Dig through the system by using terminal commands, discover files, go through them to learn the necessary information to progress further in the game.',
      img: t2,
    },
    {
      title: 'UNCOVER SECRETS',
      description: 'You are here for a reason. Take back what they stole from you, no matter what. Uncover what Project BEYOND really is.',
      img: t3,
    },
  ]

  return (
    <section className="terminal22-page">
      <div className="crt-scanlines" />
      <div className="terminal22-content">
        <div className="terminal22-hero">
          <h1 className="terminal22-title title-vcr">TERMINAL22</h1>
          <span className="terminal22-cursor" />
        </div>

        <p className="terminal22-description reveal">
          {'>'} TERMINAL22 is a bullet hell and puzzle game that uses the style of an old computer terminal. Hack into devices, dig through files and uncover the secrets lurking beneath the surface.
        </p>

        <a
          href="https://store.steampowered.com/app/2704020/TERMINAL22/"
          target="_blank"
          rel="noopener noreferrer"
          className="steam-btn reveal reveal-delay-1"
        >
          GET ON STEAM
        </a>

        <div className="terminal22-features">
          {features.map((feature) => (
            <div key={feature.title} className="terminal22-feature reveal">
              <img src={feature.img} alt={feature.title} className="feature-image" />
              <div className="feature-text">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{'>'} {feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="terminal22-trailer reveal">
          <div className="trailer-embed">
            <iframe
              src="https://www.youtube.com/embed/dBYE9SVODTU?si=nusRvgPdRFlh2EYh"
              title="TERMINAL22 Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terminal22
