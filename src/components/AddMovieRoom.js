import { useState, useEffect } from 'react';
import Button from "./Button"

const exitClick = () => {
    console.log("click");
}

const addClick = (title) => {
    console.log(title)
}

//left off needing to go through the title to get entries
//then need to go through movieData to check for title in array
const AddMovieRoom = ({movieData}) => {
    const [title, setTitle] = useState('')

    return (
        <form className = 'add-form'>
            <h1>Welcome to Add Movie Page</h1>
            <div className = 'form-control'>
                <label>Enter Movie Title</label>
            </div>
            <div>
                <input type = 'text' required 
                placeholder = 'Title' value = { title } onChange = {(e) => setTitle(e.target.value)}/>
            </div>
            <div> 
                <Button color = "green" text = "Add" onClick = { () =>{
                    console.log('user input is: '+ title)
                    var checkedForTitle = false
                    var titleFound = false

                    while(checkedForTitle == false){
                        for(var i = 0; i < movieData.length; i++){
                            if(title.toLocaleLowerCase() === movieData[i].movieName.toLocaleLowerCase()){
                                console.log('in buisness')
                                titleFound = true
                                checkedForTitle = true
                            }
                        }
                        checkedForTitle = true
                    }
                    if(titleFound === false){
                        alert('Movie not in Netflix Database');
                    }
                }}/>
                <Button color = "red" text = "Exit" onClick = {exitClick} link = "/"/>
            </div>
        </form>
    )
}

export default AddMovieRoom

/*<Button color = "green" text = "Add" onClick = {addClick(title)} />*/


