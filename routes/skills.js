var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
// GET /skills/new   to see a new skills form 
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// PUT /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;
