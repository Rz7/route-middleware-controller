// import Reader from '../Content/Reader';
// import DogModel from '../Database/Model/Dog/';

async function getDogsContent(request, response) {
    response.render('dogs', {
        message: 'Hello, my dogs!'
    });
}

async function getDogByIdContent(request) {
    return "<h1>This dog is very happy!</h1>";
}

export default {
    getDogsContent,
    getDogByIdContent
}