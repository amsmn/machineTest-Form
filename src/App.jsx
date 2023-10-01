import { Suspense } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'
import { routes } from './routes/GlobalRouter'

function App() {
 

  return (
      <Suspense fallback={<Loader />}>{routes}</Suspense>
  )
}

export default App
