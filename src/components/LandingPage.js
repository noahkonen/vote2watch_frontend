import logo from "../Images/vote2watch10.png"
import Button from "./Button"
import Axios from "axios"

//Landing page component
export const LandingPage = ({ roomData, movieRoomID }) => {

    console.log(roomData)
    console.log(movieRoomID)

    //OnClick for host room button
     const toHostRoom = async() => {
        const res = await Axios.post("http://localhost:3003/api/rooms/create", { name: movieRoomID });
    }
    //OnClick for guest room button
    const toGuestRoom = () => {
        console.log('click')
    }

    //Added a basic map function at the bottom of this return
    //this can be taken out, but it is good for testing at the moment
    return(
        <div>
            <div className = "logo">
                <img className = "image" src={logo} alt="Vote2Watch Logo"/>   
            </div>
            <h1>
                Welcome to Vote2Watch
            </h1>
            <div>
                <Button color = "darkblue" text = "Host a Game" onClick = {toHostRoom} link = "/HostGameRoom"/>
                
            </div>
            <div>
                <Button color = "blue" text = "Find Game" onClick = {toGuestRoom} link = "/GuestGameRoom"/>
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