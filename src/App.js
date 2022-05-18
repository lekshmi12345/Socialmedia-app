import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addpost from './component/Addpost';
import Searchpost from './component/Searchpost';

function App() {
  return (
    <>
    <Searchpost/>
    <Addpost/>
    </>
  );
}

export default App;
