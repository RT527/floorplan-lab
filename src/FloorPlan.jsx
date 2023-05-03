import Kitchen from "./Kitchen.jsx"
import LivingRoom from "./LivingRoom.jsx"
import Bedroom from "./Bedroom.jsx"
import Bath from "./Bath.jsx"

function FloorPlan() {
  return (
    <div className="floorplan">
      <LivingRoom />
      <Bath size={'Half'}/>
      <Bedroom bedNum={2}/>
      <Bath size={'Full'}/>
      <Bedroom bedNum={1}/>
      <Kitchen />
      <Bedroom bedNum={3}/>
    </div>
  )
}

export default FloorPlan
