// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    errorFirstMsg: '',
    errorSecondMsg: '',
    errorFirstContainer: '',
    errorSecondContainer: '',
    isSubmitted: false,
  }

  changeSubmissionStatus = () => {
    this.setState(prevState => ({
      isSubmitted: !prevState.isSubmitted,
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName === '' && secondName === '') {
      this.setState({
        errorFirstMsg: '*Required',
        errorSecondMsg: '*Required',
        errorFirstContainer: 'error-container',
        errorSecondContainer: 'error-container',
      })
    } else if (firstName === '') {
      this.setState({
        errorFirstMsg: '*Required',
        errorFirstContainer: 'error-container',
      })
    } else if (secondName === '') {
      this.setState({
        errorSecondMsg: '*Required',
        errorSecondContainer: 'error-container',
      })
    } else {
      this.setState(prevState => ({
        isSubmitted: !prevState.isSubmitted,
        firstName: '',
        secondName: '',
      }))
    }
  }

  submitAnotherResponse = () => (
    <div className="form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.changeSubmissionStatus}
      >
        Submit Another Response
      </button>
    </div>
  )

  initialUI = () => {
    const {
      firstName,
      secondName,
      errorFirstMsg,
      errorSecondMsg,
      errorFirstContainer,
      errorSecondContainer,
    } = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="label-container">
          <label htmlFor="first name" className="label-element">
            FIRST NAME
          </label>
          <input
            type="text"
            onBlur={this.event1}
            id="first name"
            className={`input-container ${errorFirstContainer}`}
            placeholder="First name"
            value={firstName}
            onChange={this.onChangeFirstName}
          />
          <p className="error-msg">{errorFirstMsg}</p>
        </div>
        <div className="label-container">
          <label htmlFor="last name" className="label-element">
            LAST NAME
          </label>
          <input
            type="text"
            onBlur={this.event2}
            id="last name"
            className={`input-container ${errorSecondContainer}`}
            placeholder="Last name"
            value={secondName}
            onChange={this.onChangeSecondName}
          />
          <p className="error-msg">{errorSecondMsg}</p>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  event1 = event => {
    if (event.target.value === '') {
      this.setState({
        errorFirstMsg: '*Required',
        errorFirstContainer: 'error-container',
      })
    }
  }

  event2 = event => {
    if (event.target.value === '') {
      this.setState({
        errorSecondMsg: '*Required',
        errorSecondContainer: 'error-container',
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
      errorFirstMsg: '',
      errorFirstContainer: '',
    })
  }

  onChangeSecondName = event => {
    this.setState({
      secondName: event.target.value,
      errorSecondMsg: '',
      errorSecondContainer: '',
    })
  }

  render() {
    const {isSubmitted} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="registration-heading">Registration</h1>
          {isSubmitted ? this.submitAnotherResponse() : this.initialUI()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
