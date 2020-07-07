class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, on: :create
    validates :first_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    has_secure_password
    
end
