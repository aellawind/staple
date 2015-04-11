class RecipesController < ApplicationController
  def create
    puts params
    @recipe = current_user.recipes.build(recipe_params)
    if @recipe.save
      render status: 200, nothing: true
    else
      render status: 500, nothing: true
    end
  end

  private
    def recipe_params
      params.require(:recipe).permit(:name, :yummly_id)
    end
end
