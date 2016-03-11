module PostsHelper
	def markdown (text)
		options = [:hard_wrap, :autolink, :no_intraemphasis, :fenced_code, :gh_blockcode]
		Markdown.new(text, *options).to_html.html_safe	
	end
end
