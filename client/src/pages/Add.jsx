import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [book,setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    })
    
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setBook(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleClick = async (e)=>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:3001/books",book)
           navigate("/")
        } catch (err){
            console.log(err)
        }

    }

    console.log(book)
  return (
    <div className='form'>
        <h1>Add New Book</h1>
        <input onChange={handleChange} type='text' placeholder='title' name='title'/>
        <input onChange={handleChange} type='text' placeholder='desc' name='desc'/>
        <input onChange={handleChange} type='number' placeholder='price' name='price'/>
        <input onChange={handleChange} type='text' placeholder='cover' name='cover'/>
        <button onClick={handleClick} className='formButton'>Add</button>
    </div>
  )
}

export default Add