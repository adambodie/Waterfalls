class CommentsController < ApplicationController

  def create
    @waterfall = Waterfall.find(params[:waterfall_id])
    @comment = @waterfall.comments.create(comment_params)
    redirect_to waterfall_path(@waterfall)
  end

  def destroy
    @waterfall = Waterfall.find(params[:waterfall_id])
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to waterfall_path(@waterfall)
	end

	 
  private
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end
end
