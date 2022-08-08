
import "./screen.css";

const Screen = ({ value }) => {
  return (
    <div style={{"fontSize" : "40px"}} className="screen" mode="single" max={70}>
      {value}
    </div>
  );
};

export default Screen;