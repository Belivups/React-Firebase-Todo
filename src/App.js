import './App.css';
import {BsTrash} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";
import {db} from "./Firebase";
import { doc, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import {useEffect, useState} from "react";



export default function App(){
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([])
    const [data, setData] = useState([])



    function AddList(e){
        e.preventDefault()

        setTodos([
            ...todos,
            {title: text, id:Math.floor(Math.random()*999999), complete: false}
        ])

        setDoc(doc(db, "todos", `${todos.length}`), {
            title: text,
            complete: false,
            id: Math.floor(Math.random()*999999),
            ids: todos.length
        });

        setText('')

    }

    // Get Data
    useEffect(  () => {
        const fetchData = async() => {
            const querySnapshot = await getDocs(collection(db, "todos"));
            const Arr = []
            querySnapshot.forEach((doc) => {
                // console.log(doc.data().title);
                Arr.push([{...doc.data(), title:doc.data().title}])
                // console.log(Arr)
            })
            setData(Arr)
        }
        fetchData()
    }, [todos])

    // Delete Doc

    // useEffect(() => {
    //     const Delete = async () => {
    //
    //     }
    // },[])

    async function DeleteDocs(e){
        // await deleteDoc(doc(db, "todos", id))
        console.log(e)
    }

    return(
        <>
            <form action="" onSubmit={AddList}>
                <input type="text" value={text} onChange={e => {setText(e.target.value)}} />
                <button>Add</button>
            </form>

            {/*Showing List Items*/}

                {data.map(e => {
                    // console.log(e[0].ids)
                    // console.log(e[0].ids)
                    let id = e[0].ids
                    console.log(id)

                    return(
                        <div key={e[0].id} className={'lists'} >
                            <li>{e[0].title} </li>
                            <div className="icons">
                                <FiEdit size={20} className={'icons'} />
                                <BsTrash id={'iddd'} size={20} className={'icons'} onClick={DeleteDocs} />
                            </div>
                        </div>
                    )
                })}
        </>
    )
}

