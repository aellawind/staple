class StaticPagesController < ApplicationController
  def welcome
    if logged_in?
      redirect_to current_user
    else
      redirect_to '/users/new'
    end
  end
end
