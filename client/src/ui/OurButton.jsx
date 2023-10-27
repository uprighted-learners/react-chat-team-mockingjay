import "./OurButton.css"

function OurButton(props) {
  return (
    <>
    <div className="our-button" onClick={props.onClick}> 
    {props.title}  </div>


    </>
  );
}


export default OurButton;