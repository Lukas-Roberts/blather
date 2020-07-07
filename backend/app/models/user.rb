class User < ApplicationRecord
    validates :username, :email, :phone_number, presence: true, uniqueness: true, on: :create
    validates :first_name, :last_name, presence: true
    
end
