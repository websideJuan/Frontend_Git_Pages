import { useState } from "react"
import { Input } from "./Input.jsx"
import { postJob } from "../services/api.js"
import { useNavigate } from 'react-router-dom'

export const Form = () => {
  const [ error, setError ] = useState([])
  const [ input, setInput ] = useState({})
  const [ message, setMessage ] = useState('')

  const navigate = useNavigate()

  const handlerSubmit = async (e) => {
    e.preventDefault()
    const res = await postJob(input)
  
    if (res.message === 'Job created') {
      setMessage('Trabajo creado con exito')
      setTimeout(() => {
        navigate('/view')
      }, 2000)
      return
    }
    
    setError(res.message.issues)
  }

  return <form className="bg-transparent" onSubmit={handlerSubmit}>

    {message !== '' && <p className="text-center text-success">
        {message}
    </p>}

    <Input input={input} setInput={setInput} error={error} setError={setError} />

    <button className="btn btn-outline-secondary w-100 shadow-sx bg-white">
      Enviar
    </button>
  </form>
}
