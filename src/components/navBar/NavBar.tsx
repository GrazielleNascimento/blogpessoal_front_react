import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/ToastAlerta'



function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-[#7D107E] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='font-bold cursor-pointer hover:text-[#2d2c24] animate-pulse'>Postagens</Link>
              <Link to='/temas' className='font-bold cursor-pointer hover:text-[#2d2c24] animate-pulse'>Temas</Link>
              <Link to='/cadastroTema' className='font-bold cursor-pointer hover:text-[#2d2c24] animate-pulse'>Cadastrar tema</Link>
              <Link to='/perfil' className='font-bold cursor-pointer hover:text-[#2d2c24] animate-pulse'>Perfil</Link>
              <Link to='' onClick={logout} className='font-bold cursor-pointer hover:text-[#2d2c24] animate-pulse'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar