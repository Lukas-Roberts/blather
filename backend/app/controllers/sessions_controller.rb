class SessionsController < ApplicationController

    def new
    end

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            log_in(user)
            render json: { message: 'Login successful!', user: user, session: session }
            #render json & pass user
        else
            render json: { message: 'Login unsuccessful, please try again.'}
            #render json error
        end
    end

end