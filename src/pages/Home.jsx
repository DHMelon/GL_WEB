import { useNavigate } from 'react-router-dom'
import violetGif from '../assets/violet.gif'
import terminalGif from '../assets/terminal.gif'
import { useScrollReveal } from '../hooks/useScrollReveal'

const games = [
  {
    id: 'breakpoint',
    title: 'Breakpoint',
    titleClass: 'title-bckr',
    path: null,
    bg: null,
    bgClass: 'breakpoint',
    tagline: 'More details soon...',
    comingSoon: true,
  },
  {
    id: 'violet-mansion',
    title: 'Violet Mansion',
    titleClass: 'title-bckr',
    path: '/main/violetmansion',
    bg: violetGif,
    bgClass: 'violet-mansion',
    tagline: 'Work together. Communicate. Endure. Survive.',
  },
  {
    id: 'terminal22',
    title: 'Terminal22',
    titleClass: 'title-vcr',
    path: '/main/terminal22',
    bg: terminalGif,
    bgClass: 'terminal22',
    tagline: 'Find her.',
  },
  {
    id: 'more',
    title: 'More Coming Soon...',
    titleClass: 'title-bckr',
    path: null,
    bg: null,
    bgClass: 'more-coming-soon',
    tagline: '',
    comingSoon: true,
  },
]

function Home() {
  const navigate = useNavigate()
  useScrollReveal()

  return (
    <section className="shelf-section">
      <div className="shelf-list">
        {games.map((game, i) => (
          <div
            key={game.id}
            className={`shelf-card ${game.bgClass} reveal reveal-delay-${i + 1}${game.comingSoon ? ' shelf-card-coming-soon' : ''}`}
            onClick={game.path ? () => navigate(game.path) : undefined}
            style={game.comingSoon ? { cursor: 'default' } : undefined}
          >
            {game.bg && <img src={game.bg} alt="" className="shelf-bg" />}
            <div className="shelf-content">
              <h2 className={`shelf-title ${game.titleClass}`}>{game.title}</h2>
            </div>
            <p className="shelf-tagline">{game.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home