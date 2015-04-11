class Recipe < ActiveRecord::Base
  validates :name, presence: true
  validates :yummly_id, presence: true
end
