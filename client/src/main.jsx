import ReactDOM from 'react-dom/client'
import { Provider } from './components/ui/provider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Layout from './Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</Provider>
)
