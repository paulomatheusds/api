const connection = require('./connection');

require('../models/UserModel');
require('../models/CategoryModel');
require('../models/ProductModel');

connection.sync({alter : true});

