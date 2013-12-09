class ListController < ApplicationController
  def index
  end

  def nearest
    @restaurants = Restaurant.near([params[:lat], params[:lng]], 20).limit(15)
    render layout: false
  end
end