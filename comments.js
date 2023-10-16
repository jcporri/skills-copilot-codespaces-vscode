// Create web server application with Node.js
// 1. Require the Express module
const express = require('express');
const app = express();
// 2. Require the body-parser module
const bodyParser = require('body-parser');
// 3. Require the path module
const path = require('path');
// 4. Require the fs module
const fs = require('fs');
// 5. Require the uuid module
const { v4: uuidv4 } = require('uuid');
// 6. Set the port
const PORT = process.env.PORT || 3000;
// 7. Set the path to the json file
const jsonPath = path.join(__dirname, 'db', 'db.json');
// 8. Set the path to the public folder
const publicPath = path.join(__dirname, 'public');
// 9. Set the path to the views folder
const viewsPath = path.join(__dirname, 'views');
// 10. Set the path to the images folder
const imagesPath = path.join(__dirname, 'images');
// 11. Set the path to the styles folder
const stylesPath = path.join(__dirname, 'styles');
// 12. Set the path to the scripts folder
const scriptsPath = path.join(__dirname, 'scripts');
// 13. Set the path to the favicon
const faviconPath = path.join(__dirname, 'favicon.ico');
// 14. Set the path to the 404 error page
const error404Path = path.join(__dirname, 'views', 'error404.html');
// 15. Set the path to the 500 error page
const error500Path = path.join(__dirname, 'views', 'error500.html');
// 16. Set the path to the comments page
const commentsPath = path.join(__dirname, 'views', 'comments.html');
// 17. Set the path to the comments page
const commentsJsonPath = path.join(__dirname, 'db', 'db.json');
// 18. Set the path to the comments page
const commentsJsonPath2 = path.join(__dirname, 'db', 'db2.json');

// 19. Set the path to the comments page
const commentsJsonPath3 = path.join(__dirname, 'db', 'db3.json');

// 20. Set the path to the comments page
const commentsJsonPath4 = path.join(__dirname, 'db', application with Node.js
// 1. Require the Express module
const express = require('express');
const app = express();
// 2. Require the body-parser module
const bodyParser = require('body-parser');
// 3. Require the path module
const path = require('path');
// 4. Require the fs module
const fs = require('fs');
// 5. Require the uuid module
const { v4: uuidv4 } = require('uuid');
// 6. Set the port
const PORT = process.env.PORT || 3000;
// 7. Set the path to the json file
const jsonPath = path.join(__dirname, 'db', 'db.json');
// 8. Set the path to the public folder
const publicPath = path.join(__dirname, 'public');
// 9. Set the path to the views folder
const viewsPath = path.join(__dirname, 'views');
// 10. Set the path to the images folder
const imagesPath = path.join(__dirname, 'images');
// 11. Set the path to the styles folder
const stylesPath = path.join(__dirname, 'styles');
// 12. Set the path to the scripts folder
const scriptsPath = path.join(__dirname, 'scripts');
// 13. Set the path to the favicon
const faviconPath = path.join(__dirname, 'favicon.ico');
// 14. Set the path to the 404 error page
const error404Path = path.join(__dirname, 'views', 'error404.html');
// 15. Set the path to the 500 error page
const error500Path = path.join(__dirname, 'views', 'error500.html');
// 16. Set the path to the comments page
const commentsPath = path.join(__dirname, 'views', 'comments.html');
// 17. Set the path to the comments page
const commentsJsonPath = path.join(__dirname, 'db', 'db.json');
// 18. Set the path to the comments page
const commentsJsonPath2 = path.join(__dirname, 'db', 'db2.json');

// 19. Set the path to the comments page
const commentsJsonPath3 = path.join(__dirname, 'db', 'db3.json');

// 20. Set the path to the comments page
const commentsJsonPath4 = path.join(__dirname, 'db',




