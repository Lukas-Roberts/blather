class BleatsController < ApplicationController

    def index
        @bleats = Bleat.all
        render json: @bleats
    end

    def create

        
    end


end
