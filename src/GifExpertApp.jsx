import { useState } from "react"
import { AddCategory, GifGrid } from "./component";


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball Z']);

  const onAddCategory = (newCategory) => {

    const newCat1 = categories.map(item => item.toLowerCase());
    const newCat = newCategory.toLowerCase();
    if (newCat1.includes(newCat)) return;

    setCategories([newCategory, ...categories])
  }

  const onResetState = () => {
    setCategories([]);
  }


  return (
    <>
     
      <h1>GifExpertApp</h1>
      <br />
      <br />
      <AddCategory
        onNewCategory={onAddCategory} 
      />
      <br />
      <button id="buttonInit" className="buttonReset" onClick={onResetState}>Reset Categories</button>
      <br />

        {
          categories.map((category) => (
            <GifGrid key={category} 
            category={category}
             />
          ))
        }
    </>
  )
}

export default GifExpertApp
