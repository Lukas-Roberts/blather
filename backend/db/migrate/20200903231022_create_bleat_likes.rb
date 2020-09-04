class CreateBleatLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :bleat_likes do |t|
      t.integer :bleat_id
      t.integer :user_id

      t.timestamps
    end
  end
end
