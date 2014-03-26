require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  setup do
    @user = users(:one)
  end

  test 'should render the index view without a user' do
    get :index
    assert_response :success
  end

  test 'should redirect from dashboard view to index without a user' do
    get :dashboard
    assert_response :redirect
  end
end
