class BleatsController < ApplicationController

    def index
        @bleats = Bleat.all
        render json: @bleats
    end

    def create
        bleat_params = params[:bleat]
        bleat = Bleat.create(user_id: bleat_params[:user_id], content: bleat_params[:content])
        @user = User.find_by(id: session[:user_id])
        render json: bleat,
            only: :content,
            include: [
                user: {
                    only: [:username, :full_name]
                }
            ]
    end
end
