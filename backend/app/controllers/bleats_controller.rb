class BleatsController < ApplicationController

    def index
        @bleats = Bleat.all
        render json: @bleats
    end

    def create
        bleat = Bleat.create(user_id: params[:user_id], content: params[:content])
        render json: bleat
    end


end
