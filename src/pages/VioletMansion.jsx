import './VioletMansion.css'
import violetGif from '../assets/violet.gif'
import workTogetherGif from '../assets/violetMansionWorkTogether.gif'
import orDontGif from '../assets/orDont.gif'
import swiftGif from '../assets/someOfThemAreSwift.gif'
import catchYouGif from '../assets/someWillCatchYou.gif'
import refuseGif from '../assets/someJustRefuse.gif'
import handImage from '../assets/handImage.webp'
import blackhole from '../assets/blackHole.gif'
import glowstick from '../assets/glowstick.gif'
import { useScrollReveal } from '../hooks/useScrollReveal'

import candle from '../assets/backgroundCandle.gif'
import heart from '../assets/heartbeatBackground.gif'
import kitchen from '../assets/kitchen.gif'
import rain from '../assets/rainBackgrounf.gif'

function VioletMansion() {
  useScrollReveal()

  const sections = [
    {
      heading: 'OBJECTIVE',
      body: 'You were selected to join a team sent into an abandoned mansion to retrieve an artifact of utmost importance. When you arrive at the mansion, you find it overrun with monsters, all with one common goal: to get rid of you in brutal fashion. Solve complicated puzzles, cooperate with your team, use whatever you can find to survive, and reach that artifact alive. It will not be an easy journey.',
      img: null,
      bg: rain,
      bgPos: '50% 100%',
      centered: true,
      tall: true,
    },
    {
      heading: 'DEATH LURKS AROUND EVERY CORNER',
      body: 'Through your journey, you will meet a huge variety of... things trying to stop you and your team. All of these creatures have unique abilities and behavior. Observe them, understand how they work, and survive against them.',
      bg: heart,
      bgPos: '0% 50%',
      centered: true,
      captions: [
        { text: 'Some of them are swift...', gif: swiftGif, pos: '30% center' },
        { text: '...some will catch you off guard...', gif: catchYouGif, pos: '30% center' },
        { text: '...and some just refuse to give up.', gif: refuseGif },
      ],
    },
    {
      heading: 'USE & SURVIVE',
      body: 'During your time in the mansion, you will run into many items you can use to increase your chance of survival and deal with problems in rather... creative ways. Use anything you can find to make sure you stay alive as long as possible.',
      bg: candle,
      bgPos: '100% 50%',
      centered: true,
      wideCaption: true,
      captions: [
        { text: 'From simple glow-sticks, explosives, and radios...', gif: glowstick },
        { text: '...to books that can create black holes and stop time.', gif: blackhole },
      ],
    },
    {
      heading: 'WORK TOGETHER',
      body: 'Cooperation is crucial for survival. You might not be able to deal with certain problems and creatures alone, but together, your chances will be significantly higher. Use the proximity chat and other communication features to cooperate your way to survival.',
      img: workTogetherGif,
      bg: kitchen,
      bgPos: '60% 50%',
      betrayalBody: '...or don\'t, screwing your teammates over can be a fun and viable strategy too. They can\'t kill you if they are too busy killing someone else, after all.',
      betrayalImg: orDontGif,
    },
    {
      heading: 'UNCOVER THE TRUTH',
      body: 'The mansion is full of secrets, stories, and other mysteries for you and your team to find and uncover. Find out how the mansion became what it is, what took place in it years ago, and why you are really there.',
      centered: true,
      bg: handImage,
      bgPos: '50% 50%',
      tall: true,
    },
  ]

  return (
    <section className="vm-page">
      <div className="vm-hero">
        <img src={violetGif} alt="" className="vm-hero-bg" />
        <div className="vm-hero-content">
          <h1 className="vm-title title-bckr">VIOLET MANSION</h1>
          <p className="vm-tagline">WORK TOGETHER. COMMUNICATE. ENDURE. SURVIVE.</p>
          <a
            href="https://store.steampowered.com/app/3059250/Violet_Mansion/"
            target="_blank"
            rel="noopener noreferrer"
            className="vm-steam-btn"
          >
            GET ON STEAM
          </a>
        </div>
      </div>

      <div className="vm-sections">
        {sections.map((s, i) => (
          <div
            key={s.heading ?? `section-${i}`}
            className={`vm-section reveal ${s.captions ? 'vm-section-captioned' : ''} ${!s.captions && i % 2 === 1 ? 'vm-section-alt' : ''}`}
          >
            {s.bg && (
              <img
                src={s.bg}
                alt=""
                className="vm-section-bg"
                style={s.bgPos ? { objectPosition: s.bgPos } : undefined}
              />
            )}

            <div className={s.betrayalBody ? 'vm-section-row' : ''}>
              <div
                className="vm-section-inner"
                style={s.tall ? { paddingTop: 140, paddingBottom: 140 } : undefined}
              >
                <div className={`vm-section-text${s.centered ? ' vm-section-text-centered' : ''}`}>
                  {s.heading && <h2 className="vm-section-heading title-bckr">{s.heading}</h2>}
                  {s.body && <p className="vm-section-body">{s.body}</p>}
                </div>

                {s.captions && (
                  <div className={`vm-captions ${s.wideCaption ? 'vm-captions-wide' : ''}`}>
                    {s.captions.map((c) => (
                      <div key={c.text} className="vm-caption-card">
                        {c.gif
                          ? <img src={c.gif} alt={c.text} className="vm-caption-img" style={c.pos ? { objectPosition: c.pos } : undefined} />
                          : <div className="vm-caption-img vm-caption-img-placeholder" />
                        }
                        <p className="vm-caption-text">{c.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {!s.captions && s.img && (
                  <img src={s.img} alt={s.heading ?? ''} className="vm-section-img" />
                )}
              </div>

              {s.betrayalBody && (
                <div className="vm-section-inner vm-section-inner-betrayal">
                  <img src={s.betrayalImg} alt="" className="vm-section-img" />
                  <div className="vm-section-text">
                    <p className="vm-section-body">{s.betrayalBody}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VioletMansion
