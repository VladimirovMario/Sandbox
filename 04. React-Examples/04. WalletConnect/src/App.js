import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <section className="main-section">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </section>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
