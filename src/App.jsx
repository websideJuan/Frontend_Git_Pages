import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { CreateJobs } from './pages/CreateJobs.jsx'
import { Initial } from './pages/Initial.jsx'
import { Jobs } from './pages/Jobs.jsx'
import { Job } from './pages/Job.jsx'
import { Layout } from './components/Layout.jsx'

const NotFound = () => {
  return <h1>404 Not Found</h1>
}

const App = () => {
  return <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Initial />} />

        <Route path='/view' element={<Layout />}>
          <Route index element={<Jobs />} />
          <Route path='/view/job/:id' element={<Job />} />
          <Route path='/view/jobs/create' element={<CreateJobs />} />
          <Route path='/view/tasks' element={<div><h1>Tareas</h1></div>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
};

export default App
