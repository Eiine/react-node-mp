import Item from "../../components/ItemProfile/Item"
import Header from "../../components/header/Header"

const Help = () => {
    return (
        <>
            <Header dato={'Ayuda'} />

            <div className='flex-col items-center justify-center '>
                <h2 className='font-semibold text-center text-xl  mt-10'>¿En que podemos ayudarte?</h2>

                <div className='bg-white shadow-cardShadow ml-5 mr-5 rounded-xl p-1 mt-5'>
                <Item
                    icon={'#'}
                    title={"Transferencias"}
                    description={"Factura, detalles, error en el sistema, etc"}
                    data={'#'}
                />

                <Item
                    icon={'#'}
                    title={"Código QR"}
                    description={"Transferencias, recargas, etc"}
                    data={'#'}
                />

                <Item
                    icon={'#'}
                    title={"Datos Personales"}
                    description={"Número de celular, alias, etc"}
                    data={'#'}
                />

                <Item
                    icon={'#'}
                    title={"Tarjetas"}
                    description={"Añadir nueva tarjeta, borrar tarjeta, etc"}
                    data={'#'}
                />
                </div>
            </div>
        </>
    )
}

export default Help
