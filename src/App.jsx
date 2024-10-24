
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecipe from './components/OurRecipe'
import Recipes from './components/Recipes'
import Sidebar from './components/Sidebar'

function App() {

  const [recipeQueue, setRecipeQueue] = useState([])
  const [prepareRecipe, setPrepareRecipe] = useState([])
  const [totalTime, setTotalTime] = useState([])
  const [totalCalories, setTotalCalories] = useState([])

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      alert('Recipe already exist in the queue')
    }
  }

  const handleRemove = id => {
    // find which recipe to remove 
    const deleteRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    // remove from want to cook table 
    const updateQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updateQueue)
    setPrepareRecipe([...prepareRecipe, deleteRecipe])
  }
  
  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(Number(totalTime + time))
    setTotalCalories(Number(totalCalories + calories))
  }

  console.log(totalTime, totalCalories)

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
        <Sidebar recipeQueue={recipeQueue} handleRemove={handleRemove} prepareRecipe={prepareRecipe} calculateTimeAndCalories={calculateTimeAndCalories} totalTime={totalTime} totalCalories={totalCalories}></Sidebar>
      </section>
    </div>
  )
}

export default App
