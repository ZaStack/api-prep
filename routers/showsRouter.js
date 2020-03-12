const router = require('express').Router();

const cors = require('cors');
const showsDB = require('../data/helpers/showsModel');

router.use(cors());

//GET shows
router.get('/', (req, res) => {
    showsDB
        .get()
        .then(shows => {
            res.status(200).json(shows);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `There is an error of ${err}`
            });
        });
});

//GET shows /:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    showsDB
        .get(id)
        .then(show => {
            res.status(200).json(show);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `There was an error of ${err}`
            });
        });
});

//Get shows characters ?/:id
router.get('/characters/:id', (req, res) => {
    const { id } = req.params;
    showsDB
        .getShowsCharacters(id)
        .then(characters => {
            res.status(200).json(characters)
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `There was an error of ${err}`
            })
        });
});

//POST
router.post('/', (req, res) => {
    showsDB
        .insert(req.body)
        .then(show => {
            res.status(201).json(show);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `There is an error of ${err}`
            });
        });
});

//DELETE /:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    showsDB
        .remove(id)
        .then(deleteShow => {
            res.status(200).json(deleteShow);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `There is an error of ${err}`
            });
        });
});

//PUT/Patch/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updateShow = req.body;
    showsDB
        .update(id, updateShow)
        .then(updateShow => {
            res.status(201).json(updateShow);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `There is an error of ${err}`
            });
        });
});

module.exports = router;
