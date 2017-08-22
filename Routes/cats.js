import validate from 'express-validation';
import validation from '../Middleware/Validation/Cats/';

import CatsController from '../Controllers/CatsController';

export default function(routes, express, parentRoute) {
    express.get('/cats', parentRoute.handler(CatsController.getCatsContent));
    express.post('/cats', validate(validation), parentRoute.handler(CatsController.addNewCat));
}
