class CreateBleats < ActiveRecord::Migration[6.0]
  def change
    create_table :bleats do |t|
      t.integer :user_id
      t.string :content
      t.integer :rebleats
      t.integer :likes

      t.timestamps
    end
  end
end
