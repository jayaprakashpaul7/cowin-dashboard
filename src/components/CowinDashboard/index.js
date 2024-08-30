import {Component} from 'react'
import {Loader} from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class CowinDashboard extends Component {
  state = {
    vaccinationData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/covid-vaccination-data`

    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(each => ({
          vaccineDate: each.vaccine_date,
          dose1: each.dose_1,
          dose2: each.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age.map(each => ({
          Age: each.age,
          count: each.count,
        })),
        vaccinationByGender: data.vaccination_by_gender.map(each => ({
          count: each.count,
          gender: each.gender,
        })),
      }

      this.setState({
        vaccinationData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  successView = () => {
    const {vaccinationData} = this.state
    return (
      <>
        <div>
          <VaccinationCoverage
            vaccinationData={vaccinationData.last7DaysVaccination}
          />
        </div>
        <div>
          <VaccinationByGender genderData={vaccinationData.vaccinationByAge} />
        </div>
        <div>
          <VaccinationByAge ageData={vaccinationData.vaccinationByAge} />
        </div>
      </>
    )
  }

  failureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  Loading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.Loading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg">
        <div className="nav-bar-c">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            className="logo"
            alt="website logo"
          />
          <h1 className="logo-name">Cowin</h1>
        </div>
        <h1>CoWin Vaccination in India</h1>

        {this.renderAllViews()}
      </div>
    )
  }
}

export default CowinDashboard
