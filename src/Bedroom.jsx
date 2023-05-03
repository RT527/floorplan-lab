function Bedroom(props) {
  return (
    <div className="bedroom" id={`bed-${props.bedNum}`}>
      <h4>Bedroom {props.bedNum}</h4>
    </div>
  )
}

export default Bedroom