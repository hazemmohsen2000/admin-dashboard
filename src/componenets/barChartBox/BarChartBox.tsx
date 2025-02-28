import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './barchartbox.scss'
type Props= {
    color : string ;
    title : string;
    dataKey : string ; 
    chartData : object[];
}
const BarChartBox = (props:Props) => {
  return (
    <div className='BarChartBox'>
        <h1>{props.title}</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={150}>
                <BarChart  data={props.chartData}>
                <Tooltip
                    contentStyle={{background:"#2a3447" , borderRadius:"5px"}}
                    labelStyle={{display:"none"}}
                    cursor={{fill:"none"}}
                    position={{x:10 , y:60}}
                />
                     <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}
export default BarChartBox