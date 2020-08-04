class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, only: [:username, :first_name]
    end

    def create
        @user = User.create(username: params[:username], password: params[:password], password_confirmation: params[:passwordConfirmation], email: params[:email], first_name: params[:firstName], last_name: params[:lastName])
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
