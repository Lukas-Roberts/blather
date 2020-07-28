class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.create(username: params[:username], password: params[:password], password_confirmation: params[:passwordConfirmation], email: params[:email], first_name: params[:firstName], last_name: params[:lastName])
        render json: @user
    end

end
