var Modal = function(ingredients) {
  this.ingredients = ingredients;
  this.view = "";
}

Modal.prototype.renderView = function() {
  var list = "<div class='mask'><div class='modal'><ul>";
  for (var i = 0; i < this.ingredients.length; i++) {
    list += "<li>" + this.ingredients[i] + "</li>"
  }
  list += "</ul><div class='exitModal'>x</div></div></div>";
  this.view = $(list);
  this.view.find('.exitModal').click(function(){
    this.view.remove();
  }.bind(this))
  $(".mainPage").append(this.view)
}

