 class AddAttachmentAvatarToWaterfalls < ActiveRecord::Migration
  def self.up
    change_table :waterfalls do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :waterfalls, :avatar
  end
end
