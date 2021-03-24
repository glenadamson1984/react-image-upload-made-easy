import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [selectFile, setSelectFile] = useState(null);

  const fileSelectHandler = (event) => {
    setSelectFile(event.target.files[0]);
  }

  const fileUploadHandler = (event) => {
    // need to set up a firebase
    axios.post('https://somefirebaseendpoint', selectFile, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total)
      }
    })
  }

  return (
    <div className="App">
      <input type="file" onChange={fileSelectHandler} />
      <button onClick={fileUploadHandler} >upload</button>
    </div>
  );
}

export default App;
