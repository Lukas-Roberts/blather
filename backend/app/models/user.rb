class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true, on: :create
    validates :password, length: { in: 8..20 }, on: :create
    validates :password_confirmation, presence: true, on: :create
    validates :first_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    
    has_many :bleats, dependent: :destroy
    
    
end
