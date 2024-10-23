
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecipe from './components/OurRecipe'
import Recipes from './components/Recipes'
import Sidebar from './components/Sidebar'

function App() {

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
        <Recipes></Recipes>
        {/* sidebar section  */}
        <Sidebar></Sidebar>
      </section>
    </div>
  )
}

export default App
