/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState} from 'react';


function App(){



  let post = 'HTML';
  var data = 'red';
  let [글제목, 글제목변경] = useState(['HTML', 'CSS' , 'JAVASCRIPT']);
  let [modal, setModal] = useState(false);
  let [따봉, 따봉변경] = useState(0);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState(0);
 
  

  return(

    <div className="App">
      <div className="black-nav">
        <h4>BLOG</h4>  
      </div>

      {
        글제목.map(function(a,i){
          return (
            <div className = "list" key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>{글제목[i]}
              <span onClick={()=>{따봉변경(따봉+1)}}> 👍 </span>{따봉}</h4>
              <button onClick={()=> {
                let copy = [...글제목]
                copy.splice(i,1); 
                글제목변경(copy);
              }}>들어가기</button>
            </div>
            )
        })
      }
      <div className="list">
        <h4>title</h4>
        <p>2022.07.31</p>
      </div>
    </div>
  )
  {
    modal ==true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
  }

  <input onChange={(e)=> { 입력값변경(e.target.value);}}>
  <button onClick={() => {
    let copy = [...글제목];
    copy.unshift();
    글제목변경(copy);
  }}>글발행</button>
  </input>


  function Modal(props){
    let [title, setTitle] = useState(0);
    return (
      <div className = "modal">
        <h4>{props.글제목[title]}</h4>
        <p>날짜</p>
      </div>
    )
  } 
}

export default App;