require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "get welcome" do
    get :welcome
    assert_response :success
  end
end
