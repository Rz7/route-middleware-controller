import Controller from '../Controllers/Controller';

export default function(routes, express, parentRoute) {
    express.get('*', parentRoute.handler(Controller.get404Content));
}
