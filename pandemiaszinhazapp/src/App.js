import logo from './logo.svg';
import './App.css';
import Header from './sections/Header';
import QuoteFormModal from './sections/QuoteFormModal';
import Hero from './sections/Hero';


function App() {
  return (
    <div className="App">
      <Header />
      <QuoteFormModal />
      <Hero />
    </div>
  );
}

export default App;
