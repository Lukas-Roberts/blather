class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, only: [:username, :full_name]
    end

    def create
        user_params = params[:user]
        @user = User.create(username: user_params[:username], password: user_params[:password], password_confirmation: user_params[:passwordConfirmation], email: user_params[:email], first_name: user_params[:firstName], last_name: user_params[:lastName])
        render json: @user, only: [:username, :first_name]
    end

    def show
        puts params
        users = User.where('username LIKE :username OR full_name LIKE :full_name', {username: "#{params[:id]}%", full_name: "#{params[:id]}%"})
        render json: users        
    end

end
