// Write your code here
// Write your code here
import './index.css'
import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {genderData} = props
  return (
    <div>
      <h1>Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          data={genderData}
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius={80}
          outerRadius={120}
          paddingAngle={0}
          dataKey="count"
          Size="20%"
          nameKey="gender"
        >
          <Cell name="Male" fill="#fecba6" />
          <Cell name="Female" fill="#b3d23f" />
          <Cell name="Others" fill="#a44c9e" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}
export default VaccinationByGender
