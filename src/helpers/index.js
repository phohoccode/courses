const { format } = require('date-fns');

module.exports = {
    sum: (a, b) => a + b,
    formatDate: date => format(date,'eeee, MMMM d, yyyy HH:mm:ss')
}