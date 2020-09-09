class SessionsController < ApplicationController

    def new
    end

    def create
        user = User.find_by(username: params[:user][:username])
        if user && user.authenticate(params[:user][:password])
            log_in(user)
            render json: user,
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
                                only: [:user_id, :content, :likes, :id]
                            }
                        }
                    },
                    comments: {
                        only: [:user_id, :content, :likes, :id]
                    },
                    bleat_likes: {
                        only: :bleat_id
                    },
                    comment_likes: {
                        only: :comment_id
                    }
                ]
                    
            #render json & pass user
        else
            render json: { message: 'Login unsuccessful, please try again.'}
            #render json error
        end
    end

    def delete
        session.clear
    end
end