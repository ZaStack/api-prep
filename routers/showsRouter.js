const router = require('express').Router();

const cors = require('cors');
const showsDB = require('../data/helpers/showsModel');

router.use(cors());

//GET shows
router.get('/', (req, res) => {
    const { id } = req.params
    showsDB
        .get()
        .then(shows => {
            res.status(200).json(shows)
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `There is an error of ${err}`
            })
        });
});

//GET shows /:id

//Get shows characters ?/:id

//POST

//DELETE /:id

//PUT/Patch/:id

module.exports = router;
