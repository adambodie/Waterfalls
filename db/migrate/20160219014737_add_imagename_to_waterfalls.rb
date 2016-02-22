class AddImagenameToWaterfalls < ActiveRecord::Migration
  def change
    add_column :waterfalls, :imageName, :string
  end
end
