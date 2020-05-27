const moment = require('moment');

const dateHelpers = {
  MY: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY'),
  Y: date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
  DMY: date => moment(date.toString(), ['YYYY-MM-DD']).format('D MMM YYYY'),
  smartDate: (startDate, endDate, format = "MMM YYYY", delimiter = "-") => {
    var output = ""
    output += moment(startDate, ['YYYY-MM-DD']).format(format)
    if (endDate) {
      output += " " + delimiter + " " + moment(endDate, ['YYYY-MM-DD']).format(format)
    } else {
      output += " " + delimiter + " " + "Current"
    }
    return output
  }
};

module.exports = { dateHelpers };
