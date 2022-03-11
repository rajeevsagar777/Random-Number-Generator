import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomNum = () => Math.ceil(Math.random() * 100)

  setRandomNumber = () => {
    const randomNum = this.generateRandomNum()
    this.setState({number: randomNum})
  }

  render() {
    const {number} = this.state
    return (
      <div className="random-number-bg">
        <div className="random-number-card">
          <h1 className="main-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.setRandomNumber}
          >
            Generate
          </button>
          <p className="random-num">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
