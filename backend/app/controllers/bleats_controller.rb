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
            only: [:user_id, :content, :likes, :id],
            include: [
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
            ]
    end

    def show
        bleat = Bleat.find_by(id: params[:id])
        render json: bleat,
            only: [:user_id, :content, :likes, :id],
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

    def update
        bleat = Bleat.find_by(id: params[:id])
        bleat.likes = bleat.likes + 1
        bleat.save
        render json: bleat
    end
end
