import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  return (
    <div className="latest-match-container">
      <div className="opponent-details">
        <p className="names">{latestMatchDetails.competingTeam}</p>
        <p className="names">{latestMatchDetails.date}</p>
        <p className="names">{latestMatchDetails.venue}</p>
        <p className="names">{latestMatchDetails.result}</p>
      </div>
      <div>
        <img
          className="logo"
          alt={`latest match ${latestMatchDetails.competingTeam}`}
          src={latestMatchDetails.competingTeamLogo}
        />
      </div>
      <div className="game-details">
        <p className="names">First Innings</p>
        <p className="names">{latestMatchDetails.firstInnings}</p>
        <p className="names">Second Innings</p>
        <p className="names">{latestMatchDetails.secondInnings}</p>
        <p className="names">Man Of The Match</p>
        <p className="names">{latestMatchDetails.manOfTheMatch}</p>
        <p className="names">Umpires</p>
        <p className="names">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
