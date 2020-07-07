class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, on: :create
    
end
