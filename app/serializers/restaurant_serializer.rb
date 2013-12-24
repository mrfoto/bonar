class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :telephone, :price, :coordinates, :opening, :menu
  has_many :features

  def filter(keys)
    if @options[:basic]
      keys = [:id, :coordinates, :price]
    else
      keys
    end
  end
end
