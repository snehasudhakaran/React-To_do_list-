import logo from './logo.svg';
import Main from './components/main.js';
import './App.css';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js'
import {useState} from 'react';
import {AddItems} from './components/addItems.js';
import { SearchItems } from './components/search';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("to_do_list"))
  );

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState("");

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem("to_do_list", JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem("to_do_list", JSON.stringify(listItems))
  }

  const addItems = (item)=>{
      const id = items.length ? items.length+1:1;
      const addingItems = {id:id,title:item,checked:false};
      const listItems = [...items,addingItems]

      setItems(listItems);
      localStorage.setItem("to_do_list", JSON.stringify(listItems))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!newItem) return;
    console.log('submitted')
    console.log(newItem)

    addItems(newItem)
    setNewItem('')
  }

  return (
    <div className="App border container">
      <Header title='To do List' />
      <AddItems
       newItem ={newItem}
       handleSubmit = {handleSubmit}
       setNewItem ={setNewItem}
      />
      <SearchItems 
      search = {search}
      setSearch = {setSearch}
      />
      <Main 
      items = {items.filter((item)=>(item.title).toLowerCase().includes(search.toLowerCase()))}
      handleDelete = {handleDelete}
      handleCheck = {handleCheck}
      />
      <Footer length = {items.length} />
    </div>
  );
}

export default App;
