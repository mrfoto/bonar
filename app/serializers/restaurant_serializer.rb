class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :telephones, :price, :coordinates, :opening, :menu
  has_many :features

  def filter(keys)
    if @scope == :basic
      keys = [:id, :coordinates, :price]
    else
      keys
    end
  end
end
