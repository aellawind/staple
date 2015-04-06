var RecipeItem = function(name, imageUrl, id, servings, ingredients, recipeUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.servings = servings;
  this.ingredients = ingredients;
  this.recipeUrl = recipeUrl;
  this.view = "";
  this.id = id;
}


RecipeItem.prototype.createView = function() {
  this.view = $("<div class='recipeItemView' data-id='" + this.id + "'>" +
                "<div class='recipeTitle'>" + this.name +"</div>"+ "</div>")
  this.view.css("background", "url(" + this.imageUrl+") no-repeat")
  this.view.css("background-size", "cover")

}

RecipeItem.prototype.addToGrid = function(view) {
  $(".recipeGrid").append(this.view);
}