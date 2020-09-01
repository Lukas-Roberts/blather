class CreateBleats < ActiveRecord::Migration[6.0]
  def change
    create_table :bleats do |t|
      t.integer :user_id
      t.string :content
      t.integer :likes, :default => 0
      t.integer :comments_count, :default => 0

      t.timestamps
    end
  end
end
