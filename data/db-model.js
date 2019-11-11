const db = require("../data/db-config.js");

module.exports = {
  findRecipes,
  findShoppingList,
  getInstructions
  
};

function findRecipes() {
    return db('recipes')
}
function  findShoppingList(recipe_id) {
/*
select  
ingredient_name, quantity
from steps as s
join instructions as ins
on ins.instruction_id = s.instruction_id
join recipes as r
on r.recipe_id= s.recipe_id
join ingredients as ing
on ing.ingredient_id = ins.instruction_id

where r.recipe_id=1
 */
return db('steps ')
.join('instructions as ins', 'ins.instruction_id', 'steps.instruction_id')
.join('recipes as r','r.recipe_id','steps.recipe_id')
.join('ingredients as ing','ing.ingredient_id','ins.instruction_id')
.select(
    'ing.ingredient_name',
    'ing.quantity'
)
.where({'r.recipe_id':recipe_id});


 /*
 function findSteps(id) {
  return db("steps")
    .join("schemes as s", "s.id", "steps.scheme_id")
    .select(
      "steps.id",
      "s.scheme_name as scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where({ "s.id": id });
}
 */
}
function getInstructions(recipe_id) {
/*
select  
instruction_text, step_order
from steps as s
join instructions as ins
on ins.instruction_id = s.instruction_id

where s.recipe_id=1
order by step_order asc
*/

return db('steps ')
.join('instructions as ins', 'ins.instruction_id', 'steps.instruction_id')
.select(
    'ins.instruction_text',
    'steps.step_order'
)
.where({'steps.recipe_id':recipe_id})
.orderBy('steps.step_order', 'asc');
}
  