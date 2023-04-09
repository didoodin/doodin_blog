export const formatDate = (date) => {
    let moment = require('moment');
    const formatDate = moment(date).format('YYYY년 MM월 DD일')
    return formatDate;
}