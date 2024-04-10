import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
function App() {
  const [count, setCount] = useState(0)

  return (
	<div className="App">
	  <FrappeProvider>
		<div>
	  <div>
		<a href="https://vitejs.dev" target="_blank">
		  <img src="/vite.svg" className="logo" alt="Vite logo" />
		</a>
		<a href="https://reactjs.org" target="_blank">
		  <img src={reactLogo} className="logo react" alt="React logo" />
		</a>
	  </div>
	  <h1>Vite + React + Frappe</h1>
	  <div className="card">
		<button onClick={() => setCount((count) => count + 1)}>
		  count is {count}
		</button>
		<p>
		  Edit <code>src/App.jsx</code> and save to test HMR
		</p>
	  </div>
	  <p className="read-the-docs">
		Click on the Vite and React logos to learn more
	  </p>
	  </div>
	  </FrappeProvider>
	</div>
  )
=======
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './pages/Index'
import LoginPage from './pages/Login'
function App() {


	return (
		<div className="App">
			<FrappeProvider siteName={import.meta.env.VITE_FRAPPE_URL ?? window.origin}
				socketPort={import.meta.env.VITE_SOCKET_PORT ?? ''}
			>
				<BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
					<Routes>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/' element={<IndexPage />} />
					</Routes>
				</BrowserRouter>

			</FrappeProvider>
		</div>
	)
>>>>>>> 2d1207133c3571fe6ace406159b747164f756796
}

export default App
