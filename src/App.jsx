import {CssBaseline} from '@mui/material';
import '@fontsource/roboto/400.css'

import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';

import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<CssBaseline />
			<Navigation />
			<LandingPage />
			<Projects />
			<Technologies />
			<Contact />
			<Footer />
		</>
	)
}

export default App;
