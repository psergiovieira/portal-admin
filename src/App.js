import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Hello World {props.value}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;