import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Form from './Components/Form/Form'

function App() {

  const [pedido, setPedido] = useState({
    producto: {},
    form: false
  })

  let proveedores = [
    {id: 1, nombre: 'Smithers', rubro: 'Carnes'},
    {id: 2, nombre: 'Plank', rubro: 'Vegetales'},
    {id: 3, nombre: 'Pinkman', rubro: 'Quimicos'},
  ]

  return (
    <>
      {proveedores.map((proveedor) => <Card proveedor={proveedor} key={proveedor.id} setPedido={setPedido}/>)}
      {pedido.form && <Form doctor={pedido.producto}/>}
    </>
  )
}

export default App