
import PropTypes from 'prop-types';
const Sidebar = ({ recipeQueue, handleRemove, prepareRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {
  return (
    <div className="md:w-1/3 border-2 rounded-xl text-gray-600 p-2 bg-base-100">
        
        {/* want to cook table */}
      <div className="overflow-x-auto">
      <h2 className="border-b-3 font-semibold text-2xl text-gray-800 text-center pb-3">Want to cook:       {recipeQueue.length}</h2>
      <hr />
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                <button onClick={()=>{ handleRemove(recipe.recipe_id), calculateTimeAndCalories(recipe.preparing_time, recipe.calories)}} className=" bg-green-400 rounded-full  px-2 py-1 md:px-4 md:py-y my-2 text-gray-800 font-medium">Preparing</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* currently cooking table */}
      <div className="overflow-x-auto mt-8">
      <h2 className="border-b-3 font-semibold text-2xl text-gray-800 text-center pb-3">Currently cooking:       {prepareRecipe.length}</h2>
      <hr />
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {prepareRecipe.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr className="border-none">
              <th></th>
              <td></td>
              <td>Total Times = {totalTime}</td>
              <td>Total Calories = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
    recipeQueue:PropTypes.array.isRequired,
    handleRemove:PropTypes.func.isRequired,
    prepareRecipe:PropTypes.array.isRequired,
    calculateTimeAndCalories:PropTypes.func.isRequired,
    totalTime:PropTypes.array.isRequired,
    totalCalories:PropTypes.array.isRequired,
  }

export default Sidebar;
