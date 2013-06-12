class Restaurant < ActiveRecord::Base
  serialize :coordinates, Array
  serialize :menu, Array
  serialize :telephone, Array
  serialize :opening, Hash

  def features
    Feature.where(id: features_array).order(:title)
  end

  def disable
    self.disabled = true
    self.save!
  end

  def self.filter_by_features features
    where 'features_array @> ARRAY[?]', features.map(&:to_i)
  end

  def self.filter_by_text text
    where 'name ILIKE :text OR address ILIKE :text', text: '%' + text + '%'
  end
end