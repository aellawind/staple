class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :yummly_id
      t.string :recipe_url

      t.timestamps null: false
      t.belongs_to :user
    end
  end
end
