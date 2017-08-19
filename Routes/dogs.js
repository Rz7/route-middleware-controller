import DogsController  from '../Controllers/DogsController';

export default function(routes, express, parentRoute) {
    express.get('/dogs', parentRoute.handler(DogsController.getDogsContent));
    express.get('/dogs/:id', parentRoute.handler(DogsController.getDogByIdContent));
}
