import './App.css'
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';

function App() {

  return (
    <div className="app">
      <div className="leftbar">
        <LeftSidebar />
      </div>
      <div className="body__container">
        <Header />
      </div>
    </div>
  )
}

export default App
