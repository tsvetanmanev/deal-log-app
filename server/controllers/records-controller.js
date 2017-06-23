const Soar = require('mongoose').model('Soar')
const User = require('mongoose').model('User')
const dataList = require('../utilities/dataList')

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
    'Ukraine',
    'Bulgaria'
  ],
  'MEMA': [
    'Saudi Arabia',
    'South Africa',
    'Turkey',
    'MA',
    'ME',
    'Middle East'
  ],
  'Germany': [
    'Germany'
  ],
  'France': [
    'France'
  ],
  'UKI': [
    'United Kingdom',
    'Ireland'
  ],
  'Iberia': [
    'Spain',
    'Portugal'
  ],
  'EMEA': [
    'EMEA'
  ]
}

module.exports = {
  addGet: (req, res) => {
    res.render('records/add', {
      subregions: subregions
    })
  },
  addPost: (req, res) => {
    let userId = req.user._id
    let reqSoar = req.body

    Soar.create({
      creator: userId,
      projectName: reqSoar.projectName,
      opportunityId: reqSoar.opportunityId,
      approvalId: reqSoar.approvalId,
      country: reqSoar.country,
      soarType: reqSoar.soarType,
      totalValue: reqSoar.totalValue,
      margin: reqSoar.margin
    }).then((soar) => {
      if (!soar) {
        console.log('Soar is not created succesfully')
      }

      User.findById(userId)
        .then((user) => {
          user.createdSoars.push(soar._id)
          user.save()
            .then(() => {
              res.redirect('/records/list')
            })
        })
    }).catch((err) => {
      console.log(err)
    })
  },
  listGet: (req, res) => {
    Soar
      .find()
      .then((soars) => {
        res.render('records/list', {
          soars: soars
        })
      })
  }
}
