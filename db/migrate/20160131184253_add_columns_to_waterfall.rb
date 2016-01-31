class AddColumnsToWaterfall < ActiveRecord::Migration
  def change
    add_column :waterfalls, :height, :integer
    add_column :waterfalls, :width, :integer
    add_column :waterfalls, :drops, :integer
    add_column :waterfalls, :tallestDrop, :integer
    add_column :waterfalls, :form, :string
    add_column :waterfalls, :watershed, :string
    add_column :waterfalls, :stream, :string
    add_column :waterfalls, :location, :string
    add_column :waterfalls, :state, :string
    add_column :waterfalls, :visit, :boolean
  end
end
