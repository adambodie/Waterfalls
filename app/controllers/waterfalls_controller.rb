class WaterfallsController < ApplicationController

	http_basic_authenticate_with name: "aduo3000", password: "ZMxnCb$0", except: [:index, :show]
  	
  	def index
    	@waterfalls = Waterfall.all
  	end  	
  	
  	def show
   	@waterfall = Waterfall.find(params[:id])
  	end
	
	def new
		@waterfall = Waterfall.new
	end
	
	def edit
  		@waterfall = Waterfall.find(params[:id])
	end
		
	def create
		@waterfall = Waterfall.new(waterfall_params)
 
  		if @waterfall.save
  			redirect_to @waterfall
  		else
  			render 'new'
  		end
  	end
	
	def update
  		@waterfall = Waterfall.find(params[:id])
 
  		if @waterfall.update(waterfall_params)	
    		redirect_to @waterfall
  		else
    		render 'edit'
  		end
	end  	

  	def destroy
  		@waterfall = Waterfall.find(params[:id])
  		@waterfall.destroy
 
  		redirect_to waterfalls_path
	end
  	private
  		def waterfall_params
    		params.require(:waterfall).permit(:title, :text, :height, :width, :drops, :tallestDrop, :form, :watershed, :stream, :location, :state, :visit, :avatar)
  		end
end


