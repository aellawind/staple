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

  def destroy
    @recipe = Recipe.find_by_yummly_id(params[:id])
    @recipe.destroy
    render nothing: true
  end

  private
    def recipe_params
      params.require(:recipe).permit(:name, :yummly_id, :recipe_url)
    end
end
