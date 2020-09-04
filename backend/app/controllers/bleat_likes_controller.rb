class BleatLikesController < ApplicationController

    def index
        bleat_likes = BleatLikes.all
        render json: bleat_likes
    end

    def create
        findBleatLike = BleatLike.find_by(bleat_id: params[:bleat_id], user_id: params[:user_id])
        user = User.find_by(id: params[:user_id])
        bleat = Bleat.find_by(id: params[:bleat_id])
        if findBleatLike
            findBleatLike.destroy
            bleat.likes = bleat.likes - 1
            bleat.save
            render json: findBleatLike,
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
                            bleat_likes: {
                                only: :bleat_id
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
        else
            bleat_like = BleatLike.create(bleat_id: params[:bleat_id], user_id: params[:user_id])
            bleat.likes = bleat.likes + 1
            bleat.save
            render json: bleat_like,
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
                            bleat_likes: {
                                only: :bleat_id
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
    end

end
