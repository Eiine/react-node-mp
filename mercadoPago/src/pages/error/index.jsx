import error from '../../assets/404-page.png'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-black text-white text-4xl'>
      <img src={error} alt='error 404' />
      <p className='text-center text-lg w-[80%] mb-3'>Página no exite, por favor ingrese a un url correcta</p>
      <button className='bg-blue-200 text-black p-2 rounded-xl font-medium text-lg' onClick={() => navigate('/home')}>Ir a Inicio</button>
    </div>
  )
}

export default ErrorPage;
