
var YummlyApi = function() {
    var keyAndId = new ApiKeyID();
    this.apiKey = keyAndId[0];
    this.apiID = keyAndId[1];
    this.firstResponse = null;
};


YummlyApi.prototype.search = function (start) {
    $.ajax({
      url: "http://api.yummly.com/v1/api/recipes?_app_id=" + this.apiID + "&_app_key=" + this.apiKey + "&q=onion+soup" + "&requirePictures=true" + "&maxResult=10&start=" + start,
      method: "GET",
      dataType: "json"
    })
      .done(function(data) {
        this.firstResponse = data;
    }.bind(this));
};

YummlyApi.prototype.getRecipe = function (recipeID) {
    $.ajax({
      url: "http://api.yummly.com/v1/api/recipe/"+ recipeID + "?_app_id=" + this.apiID + "&_app_key=" + this.apiKey,
      method: "GET",
      dataType: "json"
    })
      .done(function(data) {
        this.firstResponse = data;
    }.bind(this));
    
};

YummlyApi.prototype.randomRecipes = function() {
    $.ajax({
      url: "http://api.yummly.com/v1/api/recipes?_app_id=" + this.apiID + "&_app_key=" + this.apiKey + "&requirePictures=true",
      method: "GET",
      dataType: "json"
    })
      .done(function(data) {
        this.firstResponse = data;
    }.bind(this));
}


YummlyApi.prototype.fetchMore = function() {


}



var yummlyApi = new YummlyApi();

