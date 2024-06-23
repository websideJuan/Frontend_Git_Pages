export async function postJob (input) {
  try {
    const response = await fetch('https://backend-calculadora-ry-a.vercel.app/api/v1/jobs', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(input)
    })

    return await response.json()
  } catch (error) {
    console.log(error.message)
  }
}

export async function getJobs () {
  try {
    const response = await fetch('https://backend-calculadora-ry-a.vercel.app/api/v1/jobs')
    return await response.json()
  } catch (error) {
    console.log(error.message)
  } finally {
    console.log('data')
  }
}

export async function getJob ({ id }) {
  try {
    const response = await fetch('https://backend-calculadora-ry-a.vercel.app/api/v1/job/' + id)
    return await response.json()
  } catch (error) {
    console.log(error.message)
  }
}
