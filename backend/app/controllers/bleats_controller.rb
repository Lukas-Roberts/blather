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
            only: [:content, :likes, :comments_count],
            include: [
                user: {
                    only: [:username, :name]
                }
            ]
    end

    def show
        bleat = Bleat.find_by(id: params[:id])
        render json: bleat,
            only: [:user_id, :content, :likes, :comments_count, :id],
            include: {
                user: {
                    only: [:username, :name]
                },
                comments: {
                    only: :content,
                    include: {
                        user: {
                            only: [:username, :name]
                        }
                    }
                }
            }
            
            
    end
end
