const breweries = [
  {
    id: 10064,
    obdb_id: 'dave-s-brew-farm-wilson',
    name: "Dave's Brew Farm",
    brewery_type: 'micro',
    street: '2470 Wilson St',
    address_2: null,
    address_3: null,
    city: 'Wilson',
    state: 'Wisconsin',
    county_province: null,
    postal_code: '54027-3950',
    country: 'United States',
    longitude: '-92.176188',
    latitude: '44.959339',
    phone: '6124328130',
    website_url: 'http://www.brewfarm.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9610,
    obdb_id: 'cave-brewing-co-bethlehem',
    name: 'Cave Brewing Co',
    brewery_type: 'micro',
    street: '1407 Seidersville Rd',
    address_2: null,
    address_3: null,
    city: 'Bethlehem',
    state: 'Pennsylvania',
    county_province: null,
    postal_code: '18015-4219',
    country: 'United States',
    longitude: '-75.3464618',
    latitude: '40.5910341',
    phone: '6107391381',
    website_url: 'http://www.cavebrewing.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9308,
    obdb_id: 'brewstel-elkins',
    name: 'Brewstel',
    brewery_type: 'micro',
    street: '120 Davis Ave',
    address_2: null,
    address_3: null,
    city: 'Elkins',
    state: 'West Virginia',
    county_province: null,
    postal_code: '26241-3812',
    country: 'United States',
    longitude: '-79.849588',
    latitude: '38.923407',
    phone: '3049974769',
    website_url: 'http://www.brewstel.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11889,
    obdb_id: 'kalona-brewing-company-kalona',
    name: 'Kalona Brewing Company',
    brewery_type: 'brewpub',
    street: '405 B Ave',
    address_2: null,
    address_3: null,
    city: 'Kalona',
    state: 'Iowa',
    county_province: null,
    postal_code: '52247',
    country: 'United States',
    longitude: '-91.7075553',
    latitude: '41.4833131',
    phone: '3196563335',
    website_url: 'http://www.kalonabrewing.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9611,
    obdb_id: 'cave-mountain-brewing-co-windham',
    name: 'Cave Mountain Brewing Co',
    brewery_type: 'brewpub',
    street: '5359 State Route 23',
    address_2: null,
    address_3: null,
    city: 'Windham',
    state: 'New York',
    county_province: null,
    postal_code: '12496-5906',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5187349222',
    website_url: 'http://www.cavemountainbrewing.com',
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 14236,
    obdb_id: 'serious-brewing-co-howes-cave',
    name: 'Serious Brewing Co.',
    brewery_type: 'micro',
    street: '116 Caverns Rd',
    address_2: null,
    address_3: null,
    city: 'Howes Cave',
    state: 'New York',
    county_province: null,
    postal_code: '12092',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5188264050',
    website_url: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9869,
    obdb_id: 'coopers-cave-ale-co-glens-falls',
    name: 'Coopers Cave Ale Co',
    brewery_type: 'brewpub',
    street: '2 Sagamore St',
    address_2: null,
    address_3: null,
    city: 'Glens Falls',
    state: 'New York',
    county_province: null,
    postal_code: '12801-3179',
    country: 'United States',
    longitude: '-73.6399437',
    latitude: '43.3177399',
    phone: '5187920007',
    website_url: 'http://www.cooperscaveale.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 8900,
    obdb_id: 'big-timber-brewing-elkins',
    name: 'Big Timber Brewing',
    brewery_type: 'micro',
    street: '1210 S Davis Ave',
    address_2: null,
    address_3: null,
    city: 'Elkins',
    state: 'West Virginia',
    county_province: null,
    postal_code: '26241-3437',
    country: 'United States',
    longitude: '-79.85143109',
    latitude: '38.91765609',
    phone: '3046375008',
    website_url: 'http://www.bigtimberbrewing.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9046,
    obdb_id: 'blue-blood-brewing-company-lincoln',
    name: 'Blue Blood Brewing Company',
    brewery_type: 'brewpub',
    street: '925 Robbers Cave Rd',
    address_2: null,
    address_3: null,
    city: 'Lincoln',
    state: 'Nebraska',
    county_province: null,
    postal_code: '68502',
    country: 'United States',
    longitude: '-96.70701376',
    latitude: '40.77999602',
    phone: '4024772337',
    website_url: 'http://www.bluebloodbrewing.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9943,
    obdb_id: 'crank-arm-brewing-co-raleigh',
    name: 'Crank Arm Brewing Co',
    brewery_type: 'micro',
    street: '319 W Davie St',
    address_2: null,
    address_3: null,
    city: 'Raleigh',
    state: 'North Carolina',
    county_province: null,
    postal_code: '27601-1718',
    country: 'United States',
    longitude: '-78.64405',
    latitude: '35.7756043',
    phone: null,
    website_url: 'http://www.crankarmbrewing.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11581,
    obdb_id: 'hops-grillhouse-and-brewery-alexandria',
    name: 'Hops Grillhouse and Brewery',
    brewery_type: 'contract',
    street: '3625 Jefferson Davis Hwy',
    address_2: null,
    address_3: null,
    city: 'Alexandria',
    state: 'Virginia',
    county_province: null,
    postal_code: '22305-3133',
    country: 'United States',
    longitude: '-77.0523751',
    latitude: '38.8399578',
    phone: '7038379107',
    website_url: 'http://www.hopsrestaurants.com',
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 14684,
    obdb_id: 'strange-land-brewery-austin',
    name: 'Strange Land Brewery',
    brewery_type: 'micro',
    street: '5904 Bee Cave Road',
    address_2: null,
    address_3: null,
    city: 'Austin',
    state: 'Texas',
    county_province: null,
    postal_code: '78746',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5122762295',
    website_url: 'http://www.strangelandbrewery.com',
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 9023,
    obdb_id: 'blackwater-brewing-co-davis',
    name: 'Blackwater Brewing Co',
    brewery_type: 'micro',
    street: '912 William Ave',
    address_2: null,
    address_3: null,
    city: 'Davis',
    state: 'West Virginia',
    county_province: null,
    postal_code: '26260-0356',
    country: 'United States',
    longitude: '-79.4695264',
    latitude: '39.1274943',
    phone: '3042098118',
    website_url: 'http://www.BlackwaterBrewingWV.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 10333,
    obdb_id: 'dunloe-brewing-llc-davis',
    name: 'Dunloe Brewing LLC',
    brewery_type: 'micro',
    street: '1606 Olive Dr',
    address_2: null,
    address_3: null,
    city: 'Davis',
    state: 'California',
    county_province: null,
    postal_code: '95616-4741',
    country: 'United States',
    longitude: '-121.7311242',
    latitude: '38.5447433',
    phone: '5302313502',
    website_url: 'http://Dunloebrewing.com',
    updated_at: '2018-08-23T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 14709,
    obdb_id: 'stumptown-ales-davis',
    name: 'Stumptown Ales',
    brewery_type: 'micro',
    street: '390 William Ave',
    address_2: null,
    address_3: null,
    city: 'Davis',
    state: 'West Virginia',
    county_province: null,
    postal_code: '26260',
    country: 'United States',
    longitude: '-79.4646754',
    latitude: '39.12899878',
    phone: '3042595570',
    website_url: 'http://www.stumptownales.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 14717,
    obdb_id: 'sudwerk-brewing-co-davis',
    name: 'Sudwerk Brewing Co',
    brewery_type: 'micro',
    street: '2001 2nd St',
    address_2: null,
    address_3: null,
    city: 'Davis',
    state: 'California',
    county_province: null,
    postal_code: '95618-5474',
    country: 'United States',
    longitude: '-121.726084',
    latitude: '38.546614',
    phone: '5307562739',
    website_url: 'http://www.sudwerkbrew.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 14743,
    obdb_id: 'super-owl-brewing-davis',
    name: 'Super Owl Brewing',
    brewery_type: 'micro',
    street: '1260 Lake Blvd Ste 121',
    address_2: null,
    address_3: null,
    city: 'Davis',
    state: 'California',
    county_province: null,
    postal_code: '95616-5669',
    country: 'United States',
    longitude: '-121.787547',
    latitude: '38.55363515',
    phone: '5307465992',
    website_url: 'http://www.superowlbrewing.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 14984,
    obdb_id: 'the-mack-house-brewpub-davie',
    name: 'The Mack House Brewpub',
    brewery_type: 'brewpub',
    street: '9118 W State Road 84',
    address_2: null,
    address_3: null,
    city: 'Davie',
    state: 'Florida',
    county_province: null,
    postal_code: '33324-4416',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '9544745040',
    website_url: 'http://www.themackhouse.com',
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 15109,
    obdb_id: 'three-mile-brewing-co-davis',
    name: 'Three Mile Brewing Co',
    brewery_type: 'micro',
    street: '231 G St',
    address_2: null,
    address_3: null,
    city: 'Davis',
    state: 'California',
    county_province: null,
    postal_code: '95616-4549',
    country: 'United States',
    longitude: '-121.739122',
    latitude: '38.54403522',
    phone: '5305644351',
    website_url: 'http://www.threemilebrewing.com/',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 8797,
    obdb_id: 'beltway-brewing-company-sterling',
    name: 'Beltway Brewing Company',
    brewery_type: 'micro',
    street: '22620 Davis Dr Ste 110',
    address_2: null,
    address_3: null,
    city: 'Sterling',
    state: 'Virginia',
    county_province: null,
    postal_code: '20164-4470',
    country: 'United States',
    longitude: '-77.4172876',
    latitude: '38.9914289',
    phone: '5719892739',
    website_url: 'http://www.beltwaybrewco.com',
    updated_at: '2018-07-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 10279,
    obdb_id: 'drake-s-brewing-co-san-leandro',
    name: "Drake's Brewing Co",
    brewery_type: 'regional',
    street: '1933 Davis St Ste 177',
    address_2: null,
    address_3: null,
    city: 'San Leandro',
    state: 'California',
    county_province: null,
    postal_code: '94577-1256',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5105682739',
    website_url: 'http://www.drinkdrakes.com',
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11161,
    obdb_id: 'great-dane-pub-and-brewing-co-downtown-madison',
    name: 'Great Dane Pub and Brewing Co - Downtown',
    brewery_type: 'brewpub',
    street: '123 E Doty St Ste 1',
    address_2: null,
    address_3: null,
    city: 'Madison',
    state: 'Wisconsin',
    county_province: null,
    postal_code: '53703-5134',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '6082840000',
    website_url: 'http://www.greatdanepub.com',
    updated_at: '2018-08-11T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11162,
    obdb_id: 'great-dane-pub-and-brewing-co-fitchburg-fitchburg',
    name: 'Great Dane Pub and Brewing Co - Fitchburg',
    brewery_type: 'brewpub',
    street: '2980 Cahill Main',
    address_2: null,
    address_3: null,
    city: 'Fitchburg',
    state: 'Wisconsin',
    county_province: null,
    postal_code: '53711-7146',
    country: 'United States',
    longitude: '-89.42370903',
    latitude: '43.01816267',
    phone: '6084429000',
    website_url: 'http://www.greatdanepub.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11163,
    obdb_id: 'great-dane-pub-and-brewing-co-hilldale-madison',
    name: 'Great Dane Pub and Brewing Co -- Hilldale',
    brewery_type: 'brewpub',
    street: '357 Price Pl',
    address_2: null,
    address_3: null,
    city: 'Madison',
    state: 'Wisconsin',
    county_province: null,
    postal_code: '53705-3208',
    country: 'United States',
    longitude: '-89.45243818',
    latitude: '43.07061375',
    phone: '6086619400',
    website_url: 'http://www.greatdanepub.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 11164,
    obdb_id: 'great-dane-pub-and-brewing-co-wausau-wausau',
    name: 'Great Dane Pub and Brewing Co- Wausau',
    brewery_type: 'brewpub',
    street: '2305 Sherman St',
    address_2: null,
    address_3: null,
    city: 'Wausau',
    state: 'Wisconsin',
    county_province: null,
    postal_code: '54401-1708',
    country: 'United States',
    longitude: '-89.66482568',
    latitude: '44.9511963',
    phone: '7158453000',
    website_url: 'http://www.greatdanepub.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
  {
    id: 15730,
    obdb_id: 'wild-river-brewing-and-pizza-co-cave-junction',
    name: 'Wild River Brewing and Pizza Co',
    brewery_type: 'brewpub',
    street: '249 N Redwood Hwy',
    address_2: null,
    address_3: null,
    city: 'Cave Junction',
    state: 'Oregon',
    county_province: null,
    postal_code: '97523-9023',
    country: 'United States',
    longitude: '-123.6469844',
    latitude: '42.1622503',
    phone: '5414717487',
    website_url: 'http://www.wildriverbrewing.com',
    updated_at: '2018-08-24T00:00:00.000Z',
    created_at: '2018-07-24T00:00:00.000Z',
  },
];

export default breweries;