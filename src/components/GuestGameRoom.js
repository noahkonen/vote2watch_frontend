import Button from "./Button"

const backClick = () => {
    console.log("click")
}

export const GuestGameRoom = ({ roomData }) => {
    return(
        <div>
            <h1>Welcome to Guest Game Room</h1>
            <div>
                <Button color = "green" text = "Back" onClick = {backClick} link = "/"/>
            </div>
        </div>
    )
}

export default GuestGameRoom