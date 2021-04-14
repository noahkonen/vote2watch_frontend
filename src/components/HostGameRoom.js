import Button from "./Button"

const backClick = () => {
    console.log("click")
}

export const HostGameRoom = ({ roomIDData }) => {
    console.log("Host Game Room", roomIDData)
    return(
        <div>
            <h1>Welcome to Room {roomIDData}</h1>
            <div>
                <Button color = "purple" text = "Back" onClick = {backClick} link = "/"/>
            </div>
        </div>
    )
}

export default HostGameRoom



//We left off on needing a new room that will pass in the newRoom 