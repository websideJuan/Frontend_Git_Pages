import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GRUA_LOGO from '../assets/grua_logo-removebg-preview.png'

export const Navbar = () => {
  const [show, setShow] = useState(false)

  const handlerMenu = e => {
    if (e.target.classList.contains('navegation')) {
      setShow(false)
    }
  }

  return <>
    <nav className={`navegation ${show ? 'active' : ''}`} onClick={handlerMenu}>
      <div className={`bg-white h-100 navegation__content pe-4 ${show ? 'show' : ''}`}>

        <div className='py-2 px-3'>
          <span className='fw-bold'>
            <img src={GRUA_LOGO} width={60} height={60} alt="Logo grua" />
            RyA Gruas
          </span>
        </div>

        <div className='dropdown mb-2'>
          <button className='btn btn-dropdown dropdown-toggle w-100 text-secondary' type='button' data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-regular fa-clipboard fa-sm"></i>
            <span className='ms-2 me-auto'>Trabajos</span>
            <i className="fa-solid fa-angle-right fa-sm"></i>
          </button>
          <ul className='dropdown-menu dropdown_menu'>
            <li className='dropdown-item'>
              <NavLink to="/view/" className='text-secondary text-decoration-none'>Trabajos</NavLink>
            </li>
            <li className='dropdown-item'>
              <NavLink to="/view/jobs/create" className='text-secondary text-decoration-none'>Agregar hora</NavLink>
            </li>
          </ul>
        </div>

        <div className='dropdown'>
          <button className='btn btn-dropdown dropdown-toggle text-secondary' type='button' data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-list-check fa-sm"></i>
            <span className='ms-2 me-auto'>Tareas</span>
            <i className="fa-solid fa-angle-right fa-sm"></i>
          </button>
          <ul className='dropdown-menu dropdown_menu'>
            <li className='dropdown-item'>
              <NavLink to="/view/tasks" className='text-secondary text-decoration-none'>Tareas</NavLink>
            </li>
            <li className='dropdown-item'>
              <NavLink to="/view/tasks/create" className='text-secondary text-decoration-none'>Agregar Tarea</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
    <div className='d-flex px-2 py-3 justify-content-between'> 

      <button onClick={() => setShow(true)} className='btn btn-outline-secondary border-0 d-lg-none'>
          <i className="fa-solid fa-bars fa-lg"></i>
      </button>

      <div className='row align-items-center'>
        <div className='col-2 p-0 d-flex justify-content-center'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='col-10 p-0'>
          <input className='form-control ps-1 pe-0 border-0 bg-transparent' type="search" id="search" placeholder='Search...' />
        </div>
      </div>

      <div className='dropdown'>
        <button className='btn btn-outline-secondary border-0 position-relative dropdown-toggle btn-reset p-1 px-2' style={{ backgroundColor: '#aa4eae', color: 'white' }} type='button' data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-bell fa-lg"></i>
          <span className='position-absolute navegation-badge'>
            3
          </span>
        </button>
        <ul className="dropdown-menu">
          <li className='dropdown-item'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Notificaciones</h5>
                <p className='card-text'>No hay notificaciones</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </>
}
