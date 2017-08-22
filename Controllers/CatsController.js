import Reader from '../Content/Reader';
import CatModel from '../Database/Model/Cat/';

async function getCatsContent(request) {

    const docs = await CatModel.find({});

    return JSON.stringify(docs);
}

async function addNewCat(request) {

    // Add a new cat
    const newCat = await CatModel.create(request.body);

    // Save the cat to the db
    await newCat.save();

    return newCat.greeting();
}

export default {
    addNewCat,
    getCatsContent
}