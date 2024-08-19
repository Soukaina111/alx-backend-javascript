// This code defines a mapRoutes function that maps various routes to their corresponding controllers in the application.

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';


const mapRoutes = (app) => {
	  app.get('/', AppController.getHomepage);
	  app.get('/students', StudentsController.getAllStudents);
	  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
