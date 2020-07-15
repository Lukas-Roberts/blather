class SessionsController < ApplicationController

    def new
    end

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            #log in user
            #render json & pass user
        else
            #render json error
        end
    end

end