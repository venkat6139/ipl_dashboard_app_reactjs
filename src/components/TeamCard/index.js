import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {cardData} = props
  const {id, name, teamImageUrl} = cardData
  console.log(id, name, teamImageUrl)

  return (
    <Link className="nav-link" to={`/team-matches/${id}`}>
      <div className="card-container">
        <img className="card-image" alt={name} src={teamImageUrl} />
        <p className="card-name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard