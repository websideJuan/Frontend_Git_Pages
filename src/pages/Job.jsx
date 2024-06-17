import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getJob, getJobs } from "../services/api.js"

export const Job = () => {
  const [ job, setJob ] = useState([])
  const [ data, setData ] = useState([])
  const param = useParams()
  
  useEffect(() => {
    async function getOneJob () {
      const res = await getJob({ id : param.id })
      setJob(res)
    }

    getOneJob()
  }, [param])

  useEffect(() => {
    async function getjobData () {
      const res = await getJobs()
      setData(res)
    }

    getjobData()
  }, [])
  
  return (
    <div className="row gap-3">

      <div className="col p-0">
        <div className="card shadow-sx border-0" key={job.id}>
          <div className="card-header bg-transparent border-0">
            Periodo
            <div className="d-flex justify-content-between">
              <span>0/24</span>
              <span>06/24</span>
            </div>
          </div>
          <div className="card-body">
            <div>
              <span><b>Empresa: </b></span>
              <span>{job.name}</span>  
            </div>
            <div>
              <span><b>Semana uno: </b></span>
              <span>{job.total_horas}</span>
            </div>
            <div>
              <span><b>Total de horas: </b></span>
              <span>{parseInt(job.total_horas) + data.filter(jobs => jobs.name === job.name).length }</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col p-0">
        <div className="card shadow-sx border-0 h-100">
          <div className="card-header bg-transparent border-0">
            Horas
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <span>Fecha</span>
              <span>Horas</span>
            </div>
            <div>
              {data.filter(jobs => jobs.name === job.name).map((job, index) => (
                <div className="d-flex justify-content-between" key={index}>
                  <span>{job.date}</span>
                  <span>{job.total_horas}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 p-0">
        <div className="card shadow-sx">
          API google maps

          <div className="map-container">
            {data.filter(jobs => jobs.name === job.name).map((job, index) => (
              <div className="map-marker" key={index}>
                <span>{job.location}</span>
                {/* Render Google Maps component here */}

              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}
