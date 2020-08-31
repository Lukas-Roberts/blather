class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :bleat_id
      t.string :content
      t.integer :likes, :default => 0

      t.timestamps
    end
  end
end
