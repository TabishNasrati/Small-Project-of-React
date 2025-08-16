import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const name ="Tabish";
const currentDate = new Date();
const year = currentDate.getFullYear();



function App() {
  return (
    
    <div>
      <h1 className='heading'  contentEditable="false" >salsm</h1>
      <p> salam my name is {name}</p>
      <p>I was born at {year}</p>
      <div>
      <img src='/my-app/public/Kichen.jpg'></img>

      </div>
      
    </div>
  )
}





/*  
function App() {
  return (
    <div>
      <h1>Salam {name}</h1>
      <ul>
        <li>salam</li>
        <li>How are you</li>
        <li>My name is tabish</li>
        <ol>
          <li>salam </li>
        </ol>
      </ul>
    </div>
  );
}

*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// reportWebVitals();