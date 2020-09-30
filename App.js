import React from 'react';
import './App.css';
import Header from './Header';
import Middle from './Middle';
import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState([]);
  const [click,setClick] = useState(false);
  var index=9;
  useEffect(()=>{
    var arr=[];
    var promise = fetch('https://jsonplaceholder.typicode.com/photos').then((res)=>res.json().then((data)=>{
      console.log(data[0]);
      for(let i=0;i<index;i++){
        arr.push(data[i]);
      }
      setData(arr);
    })).catch((err)=>console.log(err));
  },[])

  useEffect(()=>{
    setData(data);
  },[click])
  const closed=(id)=>{
    console.log(id)
    index--;
    delete data[id-1]
    setClick(!click);
  }

  var comp = data.map((obj)=>{
    return <Middle title={obj.title} url={obj.url} id={obj.id} closed={closed}/>
  })
  return (
    <div className="App">
      <Header/>
      <h1 style={{margin:'40px',marginBottom:'0px'}}>Page Heading  <small>Secondary Text</small></h1>
      <hr/>
      {comp}
    </div>
  );
}

export default App;
