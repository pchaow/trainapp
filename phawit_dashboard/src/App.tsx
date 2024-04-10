import { useState } from 'react'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


	return (
		<div className="App">
			<FrappeProvider siteName={import.meta.env.VITE_FRAPPE_URL ?? window.origin}
				socketPort={import.meta.env.VITE_SOCKET_PORT ?? ''}
			>
				<BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
					<Routes>
						<Route path='/' element={<div>INDEX</div>}  />
					</Routes>
				</BrowserRouter>

			</FrappeProvider>
		</div>
	)
}

export default App
