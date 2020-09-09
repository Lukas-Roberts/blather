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
                only: [:username, :id]
            },
            following: {
                only: [:username, :id]   
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
                    only: [:username, :id]
                },
                following: {
                    only: [:username, :id]   
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
                },
                bleat_likes: {
                    only: :bleat_id
                },
                comment_likes: {
                    only: :comment_id
                }
            ]         
        else
            users = User.where('username LIKE :username OR name LIKE :name', {username: "#{params[:id]}%", name: "#{params[:id]}%"})
            render json: users 
        end       
    end

    def follow
        user = User.find_by(id: params[:id])
        user_to_follow = User.find_by(id: params[:followUserId])
        if user.following?(user_to_follow)
            user.unfollow(user_to_follow)
        else
            user.follow(user_to_follow)
        end
        render json: [user, user_to_follow],
            only: [:username, :id, :name],
            include: [
                followers: {
                    only: [:username, :id]
                },
                following: {
                    only: [:username, :id],
                    include: [
                        bleats: {
                            only: [:content, :id, :user_id, :likes],
                            include: {
                                user: {
                                    only: [:username, :name]
                                },
                                comments: {
                                    only: [:user_id, :content, :likes, :id]
                                }
                            }
                        }
                    ]   
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
                },
                bleat_likes: {
                    only: :bleat_id
                },
                comment_likes: {
                    only: :comment_id
                }
            ]
        
    end

end
