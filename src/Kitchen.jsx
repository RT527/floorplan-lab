import Oven from "./Oven.jsx"
import Sink from "./Sink.jsx"

function Kitchen() {
  return (
    <div className="kitchen">
      <h4>Kitchen</h4>
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen