import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  console.log(matchDetails)

  let status
  if (matchDetails.matchStatus === 'Lost') {
    status = 'red'
  } else {
    status = 'green'
  }

  return (
    <div className="match-container">
      <img
        className="logo"
        alt={`competing team ${matchDetails.competingTeam}`}
        src={matchDetails.competingTeamLogo}
      />
      <p className="match-name">{matchDetails.competingTeam}</p>
      <p className="match-name">{matchDetails.result}</p>
      <p className={`match-name ${status}`}>{matchDetails.matchStatus}</p>
    </div>
  )
}

export default MatchCard
