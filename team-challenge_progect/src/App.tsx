import "./App.scss";
import { TopBar } from './components/TopBar/TopBar';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './components/HomePage/HomePage';

function App() {
  return (
    <div className='App page'>
      <TopBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
