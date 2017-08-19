import CatsController from '../Controllers/CatsController';

export default function(routes, express, parentRoute) {
    express.get('/cats', parentRoute.handler(CatsController.getCatsContent));
}
