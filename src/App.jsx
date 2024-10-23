
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecipe from './components/OurRecipe'
import Recipes from './components/Recipes'
import Sidebar from './components/Sidebar'

function App() {

  const [recipeQueue, setRecipeQueue] = useState([])

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      alert('Recipe already exist in the queue')
    }
  }
  console.log(recipeQueue)

  return (
    <div className='container mx-auto px-4'>
      {/* header section */}
      <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* our recipe section */}
      <OurRecipe></OurRecipe>
      {/* recipe cart section */}
      <section className='flex flex-col md:flex-row gap-4'>
        {/* cart section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* sidebar section  */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  )
}

export default App
