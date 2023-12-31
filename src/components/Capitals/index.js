import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCapital = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return activeCapital.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry()
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading"> Countries And Capitals </h1>
          <div className="inner-card">
            <select
              className="capitals"
              value={activeId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(each => (
                <option className="options" value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of which country?</p>
          </div>
          <p className="country"> {country} </p>
        </div>
      </div>
    )
  }
}
export default Capitals
