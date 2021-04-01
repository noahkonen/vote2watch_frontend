import logo from "../Images/vote2watch10.png"

const GenRoomID = () => {
    return Math.random().toString(36).slice(2,6).toUpperCase();
  };

export const LandingPage = (props) => {
    return(
        <div>
            <div className = "logo">
                <img className = "image" src={logo} alt="Vote2Watch Logo"/>   
            </div>
            <h1>
                Welcome to Vote2Watch
            </h1>
            <h1>
                Landing Page
            </h1>
        </div>
    )
}

export default LandingPage