class CommentLikesController < ApplicationController

    def index
        comment_likes = CommentLike.all
    end

    def create
        findCommentLike = CommentLike.find_by(comment_id: params[:comment_id], user_id: params[:user_id])
        user = User.find_by(id: params[:user_id])
        comment = Comment.find_by(id: params[:comment_id])
        if findCommentLike
            findCommentLike.destroy
            comment.likes = comment.likes - 1
            comment.save 
            render json: findCommentLike,
            include: [
                user: {
                    only: [:username, :id, :name],
                    include: [
                        followers: {
                            only: :username
                        },
                        following: {
                            only: :username,
                            include: [
                                bleats: {
                                    only: [:content, :id, :user_id, :likes],
                                    include: {
                                        user: {
                                            only: [:username, :name]
                                        },
                                        comments: {
                                            only: :content
                                        }
                                    }
                                }
                            ]   
                        },
                        bleats: {
                            only: [:user_id, :content, :likes, :id],
                            include: {
                                user: {
                                    only: [:username, :name]
                                },
                                comments: {
                                    only: :content
                                }
                            }
                        },
                        comment_likes: {
                            only: :comment_id
                        }
                    ]
                },
                comment: {
                    only: [:user_id, :content, :likes, :id],
                    include: {
                        user: {
                            only: [:username, :name]
                        },
                        bleat: {
                            only: [:user_id, :content, :likes, :id],
                            include: {
                                user: {
                                    only: [:username, :name]
                                },
                                comments: {
                                    only: [:user_id, :content, :likes, :id],
                                    include: {
                                        user: {
                                            only: [:username, :name]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        else
            comment_like = CommentLike.create(comment_id: params[:comment_id], user_id: params[:user_id])
            comment.likes = comment.likes + 1
            comment.save
            render json: comment_like,
                include: [
                    user: {
                        only: [:username, :id, :name],
                        include: [
                            followers: {
                                only: :username
                            },
                            following: {
                                only: :username,
                                include: [
                                    bleats: {
                                        only: [:content, :id, :user_id, :likes],
                                        include: {
                                            user: {
                                                only: [:username, :name]
                                            },
                                            comments: {
                                                only: :content
                                            }
                                        }
                                    }
                                ]   
                            },
                            bleats: {
                                only: [:user_id, :content, :likes, :id],
                                include: {
                                    user: {
                                        only: [:username, :name]
                                    },
                                    comments: {
                                        only: :content
                                    }
                                }
                            },
                            comment_likes: {
                                only: :comment_id
                            }
                        ]
                    },
                    comment: {
                        only: [:user_id, :content, :likes, :id],
                        include: {
                            user: {
                                only: [:username, :name]
                            },
                            bleat: {
                                only: [:user_id, :content, :likes, :id],
                                include: {
                                    user: {
                                        only: [:username, :name]
                                    },
                                    comments: {
                                        only: [:user_id, :content, :likes, :id],
                                        include: {
                                            user: {
                                                only: [:username, :name]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
        end
    end
end
