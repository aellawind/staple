class StaticPagesController < ApplicationController
  def welcome
    redirect_to '/users/new'
  end
end
