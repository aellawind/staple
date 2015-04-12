var YummlyApi = function() {
    this.apiKey = API_KEY;
    this.apiID = API_ID;
    this.firstResponse = null;
    this.maxItems = 20;
    this.start = 0;
};

// query is an optional parameter
YummlyApi.prototype.fetchRecipes = function(query) {
    if (query == undefined) {
      var ajaxCall = $.ajax({
        url: "http://api.yummly.com/v1/api/recipes?_app_id=" + this.apiID + "&_app_key=" + this.apiKey + "&requirePictures=true" + "&maxResult=" + this.maxItems + "&start=" + this.start,
        method: "GET",
        dataType: "json"
      });
      this.start += this.maxItems;
      return ajaxCall
    } else {
      this.start = 0;
      console.log("http://api.yummly.com/v1/api/recipes?_app_id=" + this.apiID + "&_app_key=" + this.apiKey + "&q=" +query + "&requirePictures=true" + "&maxResult=" + this.maxItems + "&start=" + this.start)
      var ajaxCall = $.ajax({
        url: "http://api.yummly.com/v1/api/recipes?_app_id=" + this.apiID + "&_app_key=" + this.apiKey + "&q=" +query + "&requirePictures=true" + "&maxResult=" + this.maxItems + "&start=" + this.start,
        method: "GET",
        dataType: "json"
      });
      this.start += this.maxItems;
      return ajaxCall
    }
}

YummlyApi.prototype.getRecipe = function (recipeID, async) {
    return $.ajax({
      url: "http://api.yummly.com/v1/api/recipe/"+ recipeID + "?_app_id=" + this.apiID + "&_app_key=" + this.apiKey,
      method: "GET",
      dataType: "json",
      async: async
    });    
};



