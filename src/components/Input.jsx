import { useState } from "react"

/* eslint-disable react/prop-types */
const inputs = [
  { 
    id: 'name',
    label: 'Empresa: ',
    placeholder: 'Empresa',
    espesific: 'Google, Facebook, etc.'
  },
  { 
    id: 'date',
    label: 'Fecha: ',
    type: 'date',
    espesific: '2021-12-31'
  },
  { 
    id: 'start',
    label: 'Hora de inicio:',
    type: 'time',
    espesific: '08:00'
  },
  { 
    id: 'end',
    label: 'Hora de termino:',
    type: 'time',
    espesific: '17:00'
  },
  { 
    id: 'order',
    type: 'number',
    label: 'Numero de orden:',
    placeholder: '000000',
    espesific: '039228'
  }

]

export const Input = ({ input, setInput, setError }) => {
  const [ show, setShow ] = useState(false)

  const handlerChange = (e) => {
    const { id, value } = e.target
    setInput({
      ...input,
      [id]: value
    })

    setError([])
  }

  return inputs.map(({ id, type, placeholder }) => (
      <div key={id} className='form-group mb-4 shadow-sx p-3 bg-white rounded-3'>
        {
          id === 'name' && (
            <>
              <div className="position-relative">
                <input
                  type={type || 'text'}
                  id={id}
                  className={`form-control p-3 pe-1`}
                  placeholder={placeholder}
                  onChange={handlerChange}
                />

                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-3 p-1 px-2 position-absolute top-50 end-0 translate-middle-y me-2"
                  onClick={() => setShow(!show)}
                >
                  <small>
                    dirección
                  </small>
                </button>
              </div>

              {show && (
                  <input
                    type={'address'}
                    id={'address'}
                    className={`form-control border-0 mt-3 p-3 px-2`}
                    placeholder={'Dirección de la empresa'}
                    onChange={handlerChange}
                  />
                )}
            </> 
          ) || (
            <>
              <small className="text-secondary">
                {type}
              </small>
              <input
                type={type || 'text'}
                id={id}
                className={`form-control p-3 px-2`}
                placeholder={placeholder}
                onChange={handlerChange}
              />
            </>
          )
        }
        
      </div>
    ))
  
}
