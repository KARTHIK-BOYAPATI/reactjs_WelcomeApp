import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: true}

  onChangeButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you!Happy Learning</p>
        {isSubscribed ? (
          <button onClick={this.onChangeButton}>Subscribe</button>
        ) : (
          <button onClick={this.onChangeButton}>Subscribed</button>
        )}
      </div>
    )
  }
}

export default Welcome
