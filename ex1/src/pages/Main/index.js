import './style.css';
import Modal from '../../Componentes/Modal';
import { useState } from 'react'

function Main() {


  const [open, setOpen] = useState(false)

  return (
    <div className="container">

      <button onClick={() => setOpen(true)}>Open</button>
      <Modal
        open={open}
        setOpen={setOpen}
      />
    </div>

  );
}

export default Main;
