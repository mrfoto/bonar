require 'spec_helper'

describe RestaurantImporter, vcr: { record: :new_episodes } do
  before(:all) do
    VCR.use_cassette('RestaurantImporter/AllRestaurants') { @importer = RestaurantImporter.new }
  end

  it 'scrapes multiple restaurants' do
    expect(@importer.restaurants.count).to be > 100
  end

  context 'single imported restaurant' do
    let(:parsed) { @importer.parse_restaurant(@importer.restaurants.first) }
    it 'parses it to Restaurant' do
      expect(parsed).to be_instance_of(Restaurant)
      expect(parsed.name).to eq('Aperitivo Ljubljana')
      expect(parsed.spid).to eq('CRK3PKZVD5HW2N2TPB8JZUE7RA')
      expect(parsed.address).to eq('Ambrožev trg 10, Ljubljana')
      expect(parsed.price).to eq(1.87)
      expect(parsed.features.length).to eq(3)
      expect(parsed.latitude).to be_within(0.0005).of(46.0564509)
      expect(parsed.longitude).to be_within(0.0005).of(14.5080702)
      expect(parsed.telephones).to eq([])
      expect(parsed.menu.length).to eq(3)
      expect(parsed.opening[:week]).to match_array(['08:00', '20:00'])
      expect(parsed.opening[:saturday]).to match_array(['08:00', '14:00'])
      expect(parsed.opening[:sunday]).to be_false
    end

    it 'doesnt import same restaurant twice' do
      expect(@importer.parse_restaurant(@importer.restaurants.first)).to eq(parsed)
    end
  end
end
