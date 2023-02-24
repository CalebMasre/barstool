import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from "react-bootstrap";


import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Col>
          <PostList/>
        </Col> 
      </header>
    </div>
  );
}

export default App;
