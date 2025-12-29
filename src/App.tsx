import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';
//import Header from './components/Header';
import Portfolio from './sections/clientes';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-right" font-size="1 rem" />
      <GlobalStyles />

      <Hero />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
