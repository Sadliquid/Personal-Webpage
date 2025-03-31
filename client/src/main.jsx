import ReactDOM from 'react-dom/client'
import { Provider } from './components/ui/provider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio'
import Testimonial from './pages/Testimonial'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Layout from './Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="testimonial" element={<Testimonial />} />
					<Route path="skills" element={<Skills />} />
					<Route path="projects" element={<Projects />} />
					<Route path="contact" element={<Contact />} />

					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>
)
