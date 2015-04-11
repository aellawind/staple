var RecipeItem = function(name, imageUrl, id, servings, ingredients, recipeUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.servings = servings;
  this.ingredients = ingredients;
  this.recipeUrl = recipeUrl;
  this.view = "";
  this.id = id;
  this.listView = ""
}


RecipeItem.prototype.createView = function() {
  this.view = $("<div class='recipeItemView' data-id='" + this.id + "'>" +
                "<div class='recipeTitle'>" + this.name +"</div>"+  
                "<div class='addRecipeButton'>+</div></div>")
  this.view.css("background", "url(" + this.imageUrl+") no-repeat")
  this.view.css("background-size", "cover")
  this.view.find(".addRecipeButton").click(function(){
    this.createListView();
    this.addToSideBar();
  }.bind(this))
}

RecipeItem.prototype.addToGrid = function(view) {
  $(".recipeGrid").append(this.view);
}

RecipeItem.prototype.createListView = function(){
  this.listView = $("<div class='selectedRecipeView'>" + this.name + "</div>")
}

RecipeItem.prototype.addToSideBar = function(){
  var url = "/users/" + userID + "/recipes"
  $.ajax({
      url: url,
      method: "POST",
      data: {recipe: {name: this.name, yummly_id: this.id}}
  }).success(function(data){
    $(".selectedRecipes").append(this.listView);
  }.bind(this));
}