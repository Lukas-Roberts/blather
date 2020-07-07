class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, on: :create
    validates :first_name, :last_name, presence: true
    has_secure_password
    
end
