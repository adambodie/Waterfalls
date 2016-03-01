class AddIndexToWaterfalls < ActiveRecord::Migration
  def change
    add_column :waterfalls, :index, :integer
  end
end
