import logo from "../Images/vote2watch10.png"
import Button from "./Button"


const GenRoomID = () => {
    return Math.random().toString(36).slice(2,6).toUpperCase();
  };



export const LandingPage = ({ roomData }) => {
    
    console.log("landingpage")
    console.log(roomData)

    const toHostRoom = () => {
        console.log('click')
    }

    const toGuestRoom = () => {
        console.log('click')
    }

    return(
        <div>
            <div className = "logo">
                <img className = "image" src={logo} alt="Vote2Watch Logo"/>   
            </div>
            <h1>
                Welcome to Vote2Watch
            </h1>
            <div>
                <Button color = "red" text = "Host Game" onClick = {toHostRoom} link = "/HostGameRoom"/>
                
            </div>
            <div>
                <Button text = "Join Game" onClick = {toGuestRoom} link = "/GuestGameRoom"/>
            </div>
            <div>
                <h2>Available Rooms:</h2>
                {roomData.map((room) => (<h3 key = {room._id}>
                    {room.name} || {room.round}
                </h3>))}
            </div>
        </div>
    )
}

export default LandingPage