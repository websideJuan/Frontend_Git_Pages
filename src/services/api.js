export async function postJob (input) {
  const response = await fetch('https://backend-calculadora-ry-a.vercel.app/api/v1/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(input)
  })


  return await response.json()
}

export async function getJobs () {
  const response = await fetch('https://backend-calculadora-ry-a.vercel.app/api/v1/jobs')
  return await response.json()
}

export async function getJob ({ id }) {
  const response = await fetch('https://backend-calculadora-ry-a.vercel.app/api/v1/job/' + id)
  return await response.json()
}
