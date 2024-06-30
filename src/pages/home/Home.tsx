
import BarChartBox from "../../componenets/barChartBox/barChartBox"
import Chartbox from "../../componenets/chartbox/Chartbox"
import TopBox from "../../componenets/topBox/TopBox"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./home.scss"
const home = () => {
  return (
    <div className="home">
      <div className="box box1"><TopBox/></div>
      <div className="box box2"><Chartbox {...chartBoxUser}/></div>
      <div className="box box3"><Chartbox {...chartBoxProduct}/></div>
      <div className="box box4">box 4</div>
      <div className="box box5"><Chartbox {...chartBoxRevenue}/></div>
      <div className="box box6"><Chartbox {...chartBoxConversion}/></div>
      <div className="box box7">box7</div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}
export default home