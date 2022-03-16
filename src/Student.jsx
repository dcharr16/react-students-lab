import Score from "./Score.jsx"

const Student = (props) => {
return(
<div>
  <h1> {props.student.name} </h1>
  <p> {props.student.bio} </p>
  {props.student.scores.map((score, idx) => 
    <Score key={idx} score= {score}/>
    )
  }
</div>
)}
export default Student