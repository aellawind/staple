class Recipe < ActiveRecord::Base
  validates :name, presence: true
  validates :yummly_id, presence: true, uniqueness: true
  belongs_to :user
end
