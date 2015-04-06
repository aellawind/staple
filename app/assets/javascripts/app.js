$( document ).ready(function() {
    var App = function() {}

    App.prototype.initialize = function(){
      this.yummlyApi = new YummlyApi();
      this.yummlyApi.fetchRecipes().then(function(data){
        this.renderGrid(data)        
      }.bind(this));
      this.setupInfiniteScroll();
      // this.yummlyApi.getRecipe("CREPES-1059201")
    }

    App.prototype.setupInfiniteScroll = function() {
      //infinite scroll
      this.cols = Math.floor($(".recipeGrid").width()/200) ;
      this.rows = Math.ceil(this.yummlyApi.start / this.cols);
      this.gridHeight = this.rows * 200;
      $(window).scroll(function() {
          var viewHeight = $(window).scrollTop() + $(window).height();
          if (viewHeight >= this.gridHeight - 200) {
            this.yummlyApi.fetchRecipes().then(function(data){
              this.renderGrid(data)        
            }.bind(this));
            this.cols = Math.floor($(".recipeGrid").width()/200) ;
            this.rows = Math.ceil(this.yummlyApi.start / this.cols);
            this.gridHeight = this.rows * 200; 
          }
      }.bind(this));
    }


    App.prototype.renderGrid = function(data){
      for (var i = 0; i < data.matches.length; i++) { 
        var imageUrl = ""
        this.yummlyApi.getRecipe(data.matches[i].id).then(function(data) {
          var recipeItem = new RecipeItem(data.name, 
                                          data.images[0].hostedLargeUrl,
                                          data.id);
          recipeItem.createView();
          recipeItem.addToGrid();          
        })
      }
    }
    
    var app = new App();
    app.initialize();
});