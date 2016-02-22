class PicturesController < ApplicationController
  def new
    @picture = Picture.new
  end

  def create
    @waterfall = Waterfall.find(params[:waterfall_id])
    @picture = @waterfall.pictures.create(picture_params)
    if @picture.save
      flash[:notice] = "Successfully created picture."
    	redirect_to waterfall_path(@waterfall)
    else
      render :action => 'new'
    end
  end

  def edit
    @picture = Picture.find(params[:id])
  end

  def update
    @picture = Picture.find(params[:id])
    if @picture.update_attributes(picture_params)
      flash[:notice] = "Successfully updated picture."
      redirect_to @picture.waterfall
    else
      render :action => 'edit'
    end
  end

  def destroy
    @picture = Picture.find(params[:id])
    @picture.destroy
    flash[:notice] = "Successfully destroyed picture."
    redirect_to @picture.waterfall
  end
  	private
  		def picture_params
    		params.require(:picture).permit(:name, :image)
  		end
end
