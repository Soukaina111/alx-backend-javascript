// This is a basic Express.js server setup that maps routes and starts the server on a specified port
import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
	  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
