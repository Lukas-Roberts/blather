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
                    only: [:username, :id, :name],
                    include: [
                        followers: {
                            only: :username,
                            include: [
                                bleats: {
                                    only: :content
                                }
                            ]
                        },
                        following: {
                            only: :username,
                            include: [
                                bleats: {
                                    only: :content
                                }
                            ]   
                        }
                    ]
                },
                bleat: {
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
                }
            ]
    end

    def update
        comment = Comment.find_by(id: params[:id])
        comment.likes = comment.likes + 1
        comment.save
        render json: comment
end
