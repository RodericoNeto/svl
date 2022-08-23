import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormBook } from './components/FormBook';
import { NavBar } from './components/NavBar';
import BookTable from './components/BookTable'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
      <Routes>
        <Route path="booktable" element={<BookTable />} />
        <Route path="formbook" element={<FormBook />} />
      </Routes>
        {/* <FormBook />
        <BookTable /> */}
      </div>
    </div>
  );
}

export default App;
