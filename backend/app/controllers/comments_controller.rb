class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end

    def new
    end

    def create
        comment = Comment.create(user_id: params[:user_id], bleat_id: params[:bleat_id], content: params[:content])
        render json: comment,
            only: :content,
            include: [
                user: {
                    only: [:username, :name]
                },
                bleat: {
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
                }
            ]
    end
end
