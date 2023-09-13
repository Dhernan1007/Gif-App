import { useState } from "react"
import { AddCategory, GifGrid } from "./component";


const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

    const newCat1 = categories.map(item => item.toLowerCase());
    const newCat = newCategory.toLowerCase();
    if (newCat1.includes(newCat)) return;

    setCategories([newCategory, ...categories])
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
