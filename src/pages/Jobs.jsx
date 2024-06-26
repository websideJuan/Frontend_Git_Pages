import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getJobs } from "../services/api.js"
import ContainerOfContentLoader from "../components/ContentLoader.jsx"
import TIME_SVG from '../assets/time_svg_background.svg'

export const Jobs = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    () => {
      async function getData () {
        const res = await getJobs() || []
        setTimeout(() => {
          setData(res)
          setIsLoading(false)
        }, 500)
      }

      getData()
    },
    []
  )

  return (
    <section className="row gap-2 column-gap-0 row-gap-3 px-md-2 mt-3">
      {isLoading ?
          <ContainerOfContentLoader />
        :
        <>
          <div className="col-md-12 col-lg-4 mb-1 px-4 px-md-2">
            <div className="card py-4 px-0 border-0 shadow-sx after_card h-100">
              <div className="card-body px-4 mx-1 position-relative">
                <div className="d-flex flex-column">
                  <span className="fs-3">
                    Felicidades Juan! 🎉
                  </span>
                  <span className="text-secondary fs-6 mb-2 lh-1">
                    has trabajado <span>120</span> horas
                  </span>
                  <span className="mb-2 text-secondary fs-6">
                    <span className="bg-gradient" style={{ fontSize: 1.8 + 'rem' }}>20 / Hrs</span>
                  </span>
                  <button className="btn btn-primary w-sm btn_card">
                    DETALLES
                  </button>
                </div>

                <img className="position-absolute bottom-0 end-0" src={TIME_SVG} width={120} alt="icono de tiempo" style={{ zIndex: 20 }}/>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 mb-1 px-4 px-md-2">
            <div className="card py-4 px-3 shadow-sx border-0 rounded-3 h-100">
              <div className="card-body bg-white">
                <span className="fs-3">Ultimos trabajos 🚀</span>

                {data &&
                  data.filter((latestWorks, index) => (index + 1) <= 2)
                  .map((job) =><Link 
                  key={job.id}
                  to={`/view/job/${job.id}`}
                  className="text-decoration-none"
                  >
                    <h5 className="card-title fs-6">
                      <small className="d-flex justify-content-between">
                        <span>{job.name}</span>
                        <span className="fw-light">OT:{job.order}</span>
                      </small>
                    </h5>
                    <p className="card-text">{job.start} - {job.end}</p>      
                    </Link>)}
                </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 mb-1 px-4 px-md-2">
            <div className="card py-4 px-3 border-0 bg-white shadow-sx h-100"></div>
          </div>

          <div className="col-md-12 col-lg-12 mb-1 px-4 px-md-2">
            <div className="card bg-transparent border-0">
              <div className="card-header mb-3 rounded-3 bg-white shadow-sx d-flex justify-content-between align-items-center border-0">
                <span className="d-block bg-white px-2" style={{ fontSize: 1.3 + 'rem' }}>Tabla de horas</span>
                <div className="dropdown d-flex justify-content-end">
                  <button className="btn-reset btn border-0 dropdown-toggle px-0 w-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <i className="fa-solid fa-file-export text-warning me-2"></i>
                      Export
                    </li>
                    <li className="dropdown-item">
                      <i className="fa-regular fa-eye me-2 text-warning"></i>
                      Previsualizar
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body rounded-3 p-0 overflow-x-auto bg-white shadow-sx">
                <table className="table p-2">
                  <thead>
                    <tr>
                      <th scope="col" className="text-nowrap">ID</th>
                      <th scope="col" className="text-nowrap">Empresa</th>
                      <th scope="col" className="text-nowrap">Orden</th>
                      <th scope="col" className="text-nowrap">Fecha</th>
                      <th scope="col" className="text-nowrap">Horas</th>
                      <th scope="col" className="text-nowrap">Total D</th>
                      <th scope="col" className="text-nowrap">Total N</th>
                      <th scope="col" className="text-nowrap">Total V</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (data.length !== 0 && data.map((jobs, index) => (
                        <tr key={jobs.id}>
                          <th scope="row">{(index + 1)}</th>
                          <td className="text-nowrap">{jobs.order}</td>
                          <td className="text-nowrap">{jobs.name}</td>
                          <td className="text-nowrap">{jobs.date}</td>
                          <td className="text-nowrap">{`${jobs.horasTrabajadas.horas}:${jobs.horasTrabajadas.minutos !== 0 ? jobs.horasTrabajadas.minutos : '00' }`}</td>
                          <td className="text-nowrap">{jobs.horasTrabajadas.extras ? jobs.horasTrabajadas.extras : '0'}</td>
                          <td className="text-nowrap">{jobs.horas_N ? jobs.horas_N : '0'}</td>
                          <td className="text-nowrap">{jobs.horas_V ? jobs.horas_V : '0'}</td>
                        </tr>
                      )))
                    }
                    <tr>
                      <th scope="row">Total</th>
                      <td  className="text-nowrap"colSpan='8'>
                        {
                          data.map(job => ({ totalHoras: `${job.horasTrabajadas.horas}.${job.horasTrabajadas.minutos}` })).reduce((el, acc) => parseInt(acc.totalHoras  )
                          + el, 0)
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>}
    </section>
  )
}
