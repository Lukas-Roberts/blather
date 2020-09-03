class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, only: [:username, :name]
    end

    def create
        user_params = params[:user]
        @user = User.create(username: user_params[:username], password: user_params[:password], password_confirmation: user_params[:passwordConfirmation], email: user_params[:email], name: user_params[:name])
        log_in(@user)
        render json: @user,
        only: [:username, :id, :name],
        include: [
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
                        only: [:username, :name]
                    }
                }
            },
            bleats: {
                only: :content,
                include: {
                    user: {
                        only: [:username, :name]
                    }
                }
            }
        ]
    end

    def show
        if (params[:id][0] =~ /[[:digit:]]/)
            user = User.find_by(id: params[:id])
            render json: user,
            only: [:username, :id, :name],
            include: [
                followers: {
                    only: :username
                },
                following: {
                    only: :username   
                },
                bleats: {
                    only: [:user_id, :content, :likes, :id],
                    include: {
                        user: {
                            only: [:username, :name]
                        },
                        comments: {
                            only: :content
                        }
                    }
                }
            ]         
        else
            users = User.where('username LIKE :username OR name LIKE :name', {username: "#{params[:id]}%", name: "#{params[:id]}%"})
            render json: users 
        end       
    end

end
