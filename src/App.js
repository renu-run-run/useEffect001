import React,{useState , useEffect} from 'react'
import './App.css';

function App() {
  const [query,setQuery] = useState("Paneer")
  const [data,setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false)
  useEffect(()=>{
    fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=bdd0b193&app_key=f9c8c35956bfd7d44ef4f2affe291ae4&type=public`).then(
      (Response) => Response.json()
    ).then(
      (data) => {
        const arrayData = data.hits
        setData(arrayData)
        })
        console.log(data)
        // eslint-disable-next-line 
      },[isClicked]
    )
 

  return (
    <div className="App">
       {query}
       <input onChange={(e)=>setQuery(e.target.value)} type="text"></input>
     <button onClick={()=>{setIsClicked(true)}}>Fetch</button>
      {
        data.map((item,i)=>{
          return <div key={i}>
          <p>{item.recipe.label} </p> <br/>
           <img src={item.recipe.image}></img>
          </div>
        })
      }
    </div>
  );
}

export default App;
