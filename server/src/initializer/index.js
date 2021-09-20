import cors from 'cors';
import corsOption from '../config/cors.js';
import nasa from '../routes/nasa.js'

const initializer = {
  init(app) {
    app.use(cors(corsOption));
	app.use('/nasa',nasa);
  },
};

export default initializer;
