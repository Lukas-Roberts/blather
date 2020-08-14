class SessionsController < ApplicationController

    def new
    end

    def create
        user = User.find_by(username: params[:user][:username])
        puts params
        if user && user.authenticate(params[:user][:password])
            log_in(user)
            render json: { message: 'Login successful!', user: user, session: session }
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