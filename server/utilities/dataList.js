let Oldcountries = ['CIS',
  'EEM',
  'Czech Republic',
  'Hungary',
  'Poland',
  'Russia',
  'Slovakia',
  'Germany',
  'EMEA',
  'France',
  'Austria',
  'Belgium',
  'Denmark',
  'Baltics',
  'Finland',
  'Luxembourg',
  'Netherlands',
  'Norway',
  'Sweden',
  'Switzerland',
  'Portugal',
  'Spain',
  'Italy',
  'MEMA',
  'Greece',
  'Israel',
  'Saudi Arabia',
  'South Africa',
  'Turkey',
  'Ireland',
  'United Kingdom',
  'MA',
  'ME',
  'Poland',
  'Russian Federation',
  'Hungary',
  'Slovakia',
  'Former CIS',
  'Austria',
  'Czech Republic',
  'Germany',
  'Switzerland',
  'Former SEE',
  'Spain',
  'Portugal',
  'Italy',
  'Baltics',
  'Finland',
  'Sweden',
  'Netherlands',
  'Norway',
  'United Kingdom',
  'Ireland',
  'Greece',
  'Turkey',
  'Saudi Arabia',
  'Middle East',
  'South Africa',
  'MA',
  'Israel',
  'Luxembourg',
  'Belgium',
  'France',
  'Romania',
  'Serbia',
  'Kazakhstan',
  'Ukraine',
  'Denmark']

let subregions = {
  'GWE': [
    'Austria',
    'Belgium',
    'Denmark',
    'Baltics',
    'Finland',
    'Luxembourg',
    'Netherlands',
    'Norway',
    'Sweden',
    'Switzerland'
  ],
  'CEE&I': [
    'EEM',
    'Czech Republic',
    'Hungary',
    'Poland',
    'Russia',
    'Slovakia',
    'Israel',
    'Hungary',
    'Slovakia',
    'Former CIS',
    'Czech Republic',
    'Romania',
    'Serbia',
    'Kazakhstan',
    'Ukraine'
  ]
}

let continents = [
  ['', 'Select a continent'],
  ['Africa', 'Africa'],
  ['Antarctica', 'Antarctica'],
  ['Asia', 'Asia'],
  ['Oceania', 'Oceania'],
  ['Europe', 'Europe'],
  ['North America', 'North America'],
  ['South America', 'South America']
]

let countries = [
  /* Prompt */
  [''],
  /* Africa */
  ['Algeria', 'Angolia', 'Benin', 'Botswana', 'Burkina', 'Burundi', 'Cameroon', 'Central African Republic', 'Chad', 'Chana', 'Comoros Island', 'Congo', 'Congo (Zaire)', 'Cote D\'Ivoire', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Ethiopia', 'Gabon', 'Guinea', 'Guinea Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tomi and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'Republic of South Africa', 'Sudan', 'Swaziland', 'Tanzania', 'Tunisia', 'Togo', 'Uganda', 'Zambia', 'Zimbabwe'],

  /* Antarctica */
  ['Mainland Antarctica', 'United Kingdom (Islands only)'],

  /* Asia */
  ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Cyprus', 'Georgia', 'Iran', 'Iraq', 'India', 'Indonesia', 'Israel and Gaza', 'Japan', 'Jordan', 'Kazakstan', 'Kuwait', 'Kyrgzstan', 'Laos', 'Lebanon', 'Malaysia', 'Mongolia', 'Myanmar (Burma)', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palau', 'Phillipines', 'Quatar', 'Russian Federation', 'Saudi Arabia', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikstan', 'Thailand', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen'],

  /* Oceania */
  ['Australia', 'Fiji', 'France (Islands only)', 'Kiribati', 'Marshall Islands', 'Micronesia, F.S.O', 'Nauru', 'New Zealand', 'Papua New Guinea', 'Solomon Islands', 'Tonga', 'Tuvalu', 'United Kingdom (Islands only)', 'Vanuatu', 'Western Samoa'],

  /* Europe */
  ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia-Herzegovina', 'Bulgaria', 'Cape Verde', 'Croatia', 'Czech Republic', 'Denmark and Greenland', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Republic of Ireland', 'Italy', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russian Federation', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Yugoslavia'],

  /* North America */
  ['Barbados', 'Bahamas', 'Belize', 'Canada', 'Costa Rica', 'Cuba', 'Dominica', 'Dominican Republic', 'El Salvador', 'France (Islands only)', 'Greenland (Denmark)', 'Grenada', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Netherlands (Islands only)', 'Pacific Islands Inc. Hawaii', 'Panama', 'St Kitts-Nevis', 'St Lucia', 'St Vincent and the Grenadines', 'Trinidad and Tobago', 'United Kingdom (Islands only)', 'United States Of America'],

  /* South America */
  ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'French Guiana', 'Guyana', 'Nicaragua', 'Paraguay', 'Peru', 'Suriname', 'United Kingdom (Islands only)', 'Uruguay', 'Venezuela']
]

module.exports = {
  subregions: subregions
}
