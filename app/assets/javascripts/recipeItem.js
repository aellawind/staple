var RecipeItem = function(name, imageUrl, id, recipeUrl, servings, ingredients) {
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
  this.view.find(".addRecipeButton").click(function(event){
    event.stopPropagation();
    this.createListView();
    this.addToSideBar();
  }.bind(this));
  this.view.click(function(){
    window.open(this.recipeUrl, '_blank')
  }.bind(this));
}

RecipeItem.prototype.addToGrid = function(view) {
  $(".recipeGrid").append(this.view);
}

RecipeItem.prototype.createListView = function(){
  this.listView = $("<div data-recipe-url='"+ this.recipeUrl +
                    "' data-id='" + this.id +
                    "' class='selectedRecipeView'><div class='selectedRecipeName'>" + 
                    this.name + "</div><div class='deleteRecipe'>x</div>"+
                    "</div>")
  this.listView.click(function(event){
    if (event.target.className=="deleteRecipe") {
      var url = "/users/" + userID + "/recipes/" + event.target.parentElement.dataset.id
      $.ajax({
        url: url,
        method: "DELETE"
      }).done(function(){
        event.target.parentElement.remove();
      })
    } else {
      window.open(this.recipeUrl, '_blank');
    }
  }.bind(this))
}

RecipeItem.prototype.addToSideBar = function(){
  var url = "/users/" + userID + "/recipes"
  $.ajax({
      url: url,
      method: "POST",
      data: {recipe: {name: this.name, yummly_id: this.id, recipe_url: this.recipeUrl}}
  }).success(function(data){
    $(".selectedRecipes").append(this.listView);
  }.bind(this));
}

