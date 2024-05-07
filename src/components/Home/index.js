import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, cards: []}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({isLoading: false, cards: formattedData})
  }

  render() {
    const {isLoading, cards} = this.state
    console.log(isLoading, cards)

    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="home-heading-container">
              <img
                className="ipl-logo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="home-heading">IPL Dashboard</h1>
            </div>
            <div className="home-cards-container">
              {cards.map(each => (
                <li className="home-list" key={each.id}>
                  <TeamCard cardData={each} />
                </li>
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Home
