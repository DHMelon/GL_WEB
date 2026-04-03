import './Team.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import catPhoto from '../assets/cat.jpeg'
import lilaPhoto from '../assets/lila.jpeg'

const members = [
  {
    name: 'Lila Ozerdem',
    role: 'Founder | Sole Developer',
    description: 'The founder and currently solo developer of Golden Lemon who lives to fullfil her one and only dream: to make unique, creative games that try to tell stories that are worth telling. Her endless sleepless nights of dreams that are too grand could only be satisfied by putting them into reality, and she is doing just that. She is also incredibly thankful for you taking the time to check her work out!',
    photo: lilaPhoto,
  },
  {
    name: 'Melo',
    role: 'Moral Support',
    description: "Moral support and the glue that holds Lila's mental well-being together. A very well established, professional, british-shorthair. Take cares of banking sometimes.",
    photo: catPhoto,
  },
]

function Team() {
  useScrollReveal()

  return (
    <section className="team-section">
      <h1 className="team-title title-bckr reveal">The Team</h1>

      <div className="team-list">
        {members.map((member) => (
          <div key={member.name} className="team-member reveal">
            <div className="team-member-photo">
              {member.photo
                ? <img src={member.photo} alt={member.name} className="team-member-photo-img" />
                : <span>Photo</span>
              }
            </div>
            <div className="team-member-name-row">
              <h2 className="team-name title-bckr">{member.name}</h2>
              <p className="team-role">{member.role}</p>
            </div>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
