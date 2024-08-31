import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { AddDish } from './components/AddDish';
import ShowDish from './ShowDish/ShowDish';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddDish name = "Biryani"/>
    </div>
  );
}

export default App;
