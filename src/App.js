import { useState } from 'react';
import './App.css';

function App(){
const [person,setPerson] = useState({
  name:"",
  price:"",
  image: ""
})
const [item,setItem] = useState([]);
const [search,setSearch] = useState("");
function handleInp(e){
  setPerson({...person, [e.target.name]:e.target.value});
}
function saveData(e){
e.preventDefault();
setItem([...item,person]);
}

function sortData(){
  setItem([...item.sort((a,b)=>a.price - b.price)])
}

function searchData(e){
setSearch(e.target.value.toLowerCase());
}

return(
<div>
  <input name="name" onChange={handleInp} type="text" placeholder='Name'/> <br/> <br/>
  <input name="price" onChange={handleInp} type="text" placeholder='Price'/> <br/> <br/>
  <input name="image" onChange={handleInp} type="text" placeholder='Image'/> <br/> <br/>
  <button className="btn" onClick={saveData} >Add</button> <br/> <br/>
  <button className="btn" onClick={sortData}>Sort</button> <br/> <br/>
  <input onChange={searchData} type="text" placeholder='Search'/>
  <div className='dd'>
  {
    
   item.filter(a=>a.name.toLowerCase().includes(search)).map((a,b)=>(
    
    <div className="d1" key={b}>
      <h1>Name: {a.name}</h1>
    <h2>Price: {a.price}</h2>
    <img className='img1' src={a.image} alt=""/> 
    </div>
   
    
   ))
  }
</div>   
</div>
); 



}
export default App;  