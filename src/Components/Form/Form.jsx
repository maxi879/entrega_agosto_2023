import { useState } from 'react'

const Form = () => {

    const [cliente, setCliente] = useState({
        name: '',
        mail: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(cliente.name.length > 3 && cliente.mail.length > 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }

    console.log(cliente)
  return (
    <form onSubmit={handleSubmit}>
        <label >Nombre:</label>
        <input type="text" onChange={(event) => setCliente({...cliente, name: event.target.value})}/>
        <label >Correo:</label>
        <input type="text" onBlur={(event) => setCliente({...cliente, mail: event.target.value})}/>
        <button>Mandar pedido</button>

        {error && <h6>Por favor chequea que la información sea correcta</h6>}

        {show ? <>
            <h4>Gracias {cliente.name}!</h4>
            <h4>Ya estamos enviando tu pedido a {cliente.mail}</h4>
        </>
        : null
        }


        {/* {condicion ? true : false} */}
    </form>
  )
}

export default Form