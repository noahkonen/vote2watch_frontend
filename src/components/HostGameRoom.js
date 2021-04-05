import Button from "./Button"

const backClick = () => {
    console.log("click")
}

export const HostGameRoom = ({ roomData }) => {
    return(
        <div>
            <h1>Welcome to Host Game Room</h1>
            <div>
                <Button color = "red" text = "Back" onClick = {backClick} link = "/"/>
            </div>
        </div>
    )
}

export default HostGameRoom