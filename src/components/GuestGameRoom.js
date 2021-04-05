import Button from "./Button"

const backClick = () => {
    console.log("click")
}

export const GuestGameRoom = ({ roomData }) => {
    console.log("guest room")
    return(
        <div>
            <h1>Welcome to Guest Game Room</h1>
            <div>
                <Button color = "gray" text = "Back" onClick = {backClick} link = "/"/>
            </div>
        </div>
    )
}

export default GuestGameRoom