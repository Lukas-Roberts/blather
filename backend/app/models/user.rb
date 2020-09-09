class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true, on: :create
    validates :password, length: { in: 8..20 }, on: :create
    validates :password_confirmation, presence: true, on: :create
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    has_many :bleats, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :bleat_likes, dependent: :destroy
    has_many :comment_likes, dependent: :destroy
    has_many :following_users, foreign_key: "follower_id", dependent: :destroy
    has_many :follower_users, class_name: "FollowingUser", foreign_key: "following_id", dependent: :destroy
    has_many :followers, class_name: "User", through: :follower_users, foreign_key: "follower_id"
    has_many :following, class_name: "User", through: :following_users, foreign_key: "following_id" 
        
    def following?(user)
        self.following.include?(user)
    end

    def follow(user)
        self.following << user
        
    end

    def unfollow(user)
        self.following.delete(user)
        
    end

end
