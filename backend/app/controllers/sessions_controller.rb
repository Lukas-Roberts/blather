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
                        only: :username
                    },
                    following: {
                        only: :username   
                    },
                    feed: {
                        only: [:user_id, :content, :likes, :comments_count, :rebleats_count],
                        include: {
                            user: {
                                only: [:username, :name]
                            },
                            comments: {
                                only: :content
                            }
                        }
                    },
                    bleats: {
                        only: [:content, :likes, :comment_count, :rebleat_count],
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