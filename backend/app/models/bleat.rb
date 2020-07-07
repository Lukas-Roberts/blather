class Bleat < ApplicationRecord
    validates :content, presence: true, length: { maximum: 240, too_long: '240 characters is the maximum allowed'}
    belongs_to :user
end
