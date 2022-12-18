import './App.css';
import {useState} from "react";


export default function App(){
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([])

    function AddList(e){
        e.preventDefault()

        setTodos([
            ...todos,
            {title: text, id:Math.floor(Math.random()*999999), complete: false}
        ])
        setText('')
    }

    return(
        <>
            <form action="" onSubmit={AddList}>
                <input type="text" value={text} onChange={e => {setText(e.target.value)}} />
                <button>Add</button>
            </form>


            {/*Showing List Items*/}
            <ul>
                {todos.map(e => {
                    return(
                        <li key={e.id}>{e.title} </li>
                    )
                })}
            </ul>


        </>
    )
}

