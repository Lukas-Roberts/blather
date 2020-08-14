class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, only: [:username, :first_name]
    end

    def create
        user_params = params[:user]
        @user = User.create(username: user_params[:username], password: user_params[:password], password_confirmation: user_params[:passwordConfirmation], email: user_params[:email], first_name: user_params[:firstName], last_name: user_params[:lastName])
        render json: @user, only: [:username, :first_name]
    end

    def show
        user = User.find_by(id: params[:id])
        user.getFeed
        render json: user,
            only: [:username, :first_name],
            include: {
                followers: {
                    only: :username
                },
                following: {
                    only: :username
                },
                feed: {
                    only: [:user_id, :content],
                    include: {
                        user: {
                            only: [:username, :first_name]
                        }
                    }
                }
            }            
    end

end
