import './style.css'


function Modal({ open, setOpen }) {

    return (
        <>
            {open &&
                <div className="container-modal">

                    <div className="Modal">

                        <h1>Palavras de incentivo</h1>

                        <div className='Moda-bady'>
                            <span>Você</span>
                            <span>Pode</span>
                            <span>conquistar</span>
                            <span>tudo</span>
                            <span>que</span>
                            <span>deseja</span>
                            <span>acredite!</span>
                            <h2>Você já venceu Preta!</h2>
                        </div>

                        <button onClick={() => setOpen(false)}>Close</button>

                    </div>
                </div>
            }

        </>
    )

}

export default Modal