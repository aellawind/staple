require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @user = User.create(name: "Example User", email: "user@gmail.com", password_confirmation: "123456", password: "123456")
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "name should be present" do 
    @user.name = ""
    assert_not @user.valid?
  end

  test "name shouldn't be too long" do 
    @user.name = "a"*51
    assert_not @user.valid?
  end

  test "email should be present" do
    @user.email = ""
    assert_not @user.valid?
  end

  test "email shouldn't be too long" do 
    @user.email = "k"*255 + "@gmail.com"
    assert_not @user.valid?
  end

  test "email format is valid" do 
    assert @user.valid?
  end

  test "email format is invalid" do 
    @user.email = "hello-gmail.com"
    assert_not @user.valid?
  end

  test "email addresses should be unique" do
    new_user = User.create(name: "second user", email: "USER@gmail.com")
    assert_not new_user.valid?
  end

  test "password should have minimum length" do
    @user.password = @user.password_confirmation = "a"*5
    assert_not @user.valid?
  end

  test "should be able to authenticate user" do 
    assert @user.authenticate("123456")
  end
end
