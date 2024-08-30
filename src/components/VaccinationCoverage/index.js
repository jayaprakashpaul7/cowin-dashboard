// Write your code here
import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinationData} = props
  return (
    <div>
      <h1>Vaccination Coverage</h1>

      <BarChart data={vaccinationData} width={1000} height={300}>
        <XAxis dataKey="vaccineDate" />
        <YAxis />
        <Legend />
        <Bar dataKey="dose1" name="Dose 1" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill="#a3df9f" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
