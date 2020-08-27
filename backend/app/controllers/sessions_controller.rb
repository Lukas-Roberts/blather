class SessionsController < ApplicationController

    def new
    end

    def create
        user = User.find_by(username: params[:user][:username])
        if user && user.authenticate(params[:user][:password])
            log_in(user)
            render json: user,
                only: [:username, :id, :full_name],
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
                                only: [:username, :full_name]
                            }
                        }
                    },
                    bleats: {
                        only: :content,
                        include: {
                            user: {
                                only: [:username, :full_name]
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