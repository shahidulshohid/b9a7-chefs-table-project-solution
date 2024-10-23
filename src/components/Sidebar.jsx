const Sidebar = ({ recipeQueue }) => {
  return (
    <div className="md:w-1/3 border-2 rounded-xl text-gray-600 p-2 bg-base-100">

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
                <td>calories</td>
                <td>
                <button onClick={()=> console.log('preparing')
                } className=" bg-green-400 rounded-full  px-2 py-1 md:px-4 md:py-y my-2 text-gray-800 font-medium">Preparing</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* currently cooking table */}
    </div>
  );
};

export default Sidebar;
