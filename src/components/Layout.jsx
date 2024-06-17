import { Outlet } from 'react-router-dom'

export const Layout = () => {

  return <main className='container-fluid p-4' style={{ margin: '0 auto', maxWidth: 1324 + 'px' }}>
    {<Outlet />}
  </main>
}
