var YummlyApi = function() {
    var keyAndId = new ApiKeyID();
    this.apiKey = keyAndId[0];
    this.apiID = keyAndId[1];
    this.firstResponse = null;
    this.maxItems = 20;
    this.start = 0;
};


YummlyApi.prototype.fetchRecipes = function() {
    var ajaxCall = $.ajax({
      url: "http://api.yummly.com/v1/api/recipes?_app_id=" + this.apiID + "&_app_key=" + this.apiKey + "&requirePictures=true" + "&maxResult=" + this.maxItems + "&start=" + this.start,
      method: "GET",
      dataType: "json"
    });
    this.start += this.maxItems;
    return ajaxCall
}


YummlyApi.prototype.search = function (start, query) {
    $.ajax({
      url: "http://api.yummly.com/v1/api/recipes?_app_id=" + this.apiID + "&_app_key=" + this.apiKey + "&q=" +query + "&requirePictures=true" + "&maxResult=10&start=" + this.start,
      method: "GET",
      dataType: "json"
    })
      .done(function(data) {
        this.firstResponse = data;
    }.bind(this));
};

YummlyApi.prototype.getRecipe = function (recipeID) {
    return $.ajax({
      url: "http://api.yummly.com/v1/api/recipe/"+ recipeID + "?_app_id=" + this.apiID + "&_app_key=" + this.apiKey,
      method: "GET",
      dataType: "json"
    });
    
};

