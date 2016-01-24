class CreateWaterfalls < ActiveRecord::Migration
  def change
    create_table :waterfalls do |t|
      t.string :title
      t.text :text

      t.timestamps null: false
    end
  end
end
