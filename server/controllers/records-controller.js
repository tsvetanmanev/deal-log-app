const dataList = require('../utilities/dataList')

module.exports = {
  addGet: (req, res) => {
    let subregions = dataList.subregions

    res.render('records/add', {
      subregions: subregions
    })
  }
}
