import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState(null);

const getData = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const resJson = await res.json();
    setData(resJson.slip);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getData();
}, []);

  return (
    <>
      <div id="total-container" className='total-container'>
        {data && (
          <div id="container-advice">
            <div id="number"><span>ADVICE #{data.id}</span></div>
            <div id="advice"><span>{"\"" + data.advice + "\""}</span></div>
            <div><svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#202632" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg></div>
            <div id="container-button"><button type='button' id="btn" onClick={getData}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></button></div>
          </div>
        )}
        <footer>      
          <div>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="#">kevinvillajim</a>.
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
