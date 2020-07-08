class UsersController < ApplicationController

    def create
        @user = User.create(username: params[:username], password: params[:password], password_confirmation: params[:password_confirmation], email: prarms[:email], first_name: params[:first_name], last_name: prarms[:last_name])
        if params[:phone_number]
            @user.phone_number = params[:phone_number]
        end
        render json: @user
    end

end
