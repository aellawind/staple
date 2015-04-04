require 'test_helper'

class UsersLoginTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  test "login with invalid information" do
    get login_path
    assert_template 'sessions/new'
    post login_path, session: {email: "", password: ""}
    assert_template 'sessions/new'
    assert_not flash.empty?
    get root_path
    assert flash.empty?
  end

  test "login with valid information followed by log out" do 
    User.create(name: "test", email: "test@gmail.com", password: "123456", password_confirmation: "123456")
    get login_path
    assert_template 'sessions/new'
    post login_path, session: {email: "test@gmail.com", password: "123456"}
    follow_redirect!
    assert is_logged_in?
    assert_template 'users/show'
    assert flash.empty?
    delete logout_path
    assert_redirected_to root_path
    assert_not is_logged_in?
  end

end
