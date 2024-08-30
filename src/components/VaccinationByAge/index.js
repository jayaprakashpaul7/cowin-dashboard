// Write your code here
import './index.css'
import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {ageData} = props
  return (
    <div>
      <h1>Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          data={ageData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          dataKey="count"
        >
          <Cell name="18-44" fill="#fecba6" />
          <Cell name="44-60" fill="#b3d23f" />
          <Cell name="above 60" fill="#a44c9e" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
