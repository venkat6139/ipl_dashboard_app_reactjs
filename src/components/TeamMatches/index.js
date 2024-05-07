import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    id: '',
    isLoading: true,
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const formattedLatestMatch = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const formattedRecentMatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      id: each.id,
      matchStatus: each.match_status,
      result: each.result,
    }))

    const teamBannerUrl = data.team_banner_url

    this.setState({
      id,
      isLoading: false,
      teamBannerUrl,
      latestMatchDetails: formattedLatestMatch,
      recentMatches: formattedRecentMatches,
    })
  }

  render() {
    const {id, isLoading, teamBannerUrl, latestMatchDetails, recentMatches} =
      this.state
    console.log(id, isLoading, teamBannerUrl, latestMatchDetails, recentMatches)

    return (
      <div className={`team-match-bg-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="black" height={50} width={50} />
          </div>
        ) : (
          <>
            <div>
              <img
                className="team-banner"
                src={teamBannerUrl}
                alt="team banner"
              />
            </div>

            <div>
              <h1 className="latest-heading">Latest Matches</h1>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
              <ul className="recent-matches-container">
                {recentMatches.map(each => (
                  <li key={each.id}>
                    <MatchCard matchDetails={each} />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
