const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const formatted = format(new Date(), 'yyyy/MM/dd\tHH:mm:ss');
console.log(formatted + '\t' + uuid());
