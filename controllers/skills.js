const skillDB = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    // If checked req.body.done = 'on'
    skillDB.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    // Retrieve the skill being edited
    const skill = skillDB.getOne(req.params.id);
    res.render('skills/edit', {skill});
}

function deleteSkill(req, res) {
    // The model is responsible for deleting the skill
    skillDB.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    skillDB.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new.ejs');
}

function index(req, res, next) {
    res.render('skills/index', {
        skills: skillDB.getAll()
    })
 }

function show(req, res, next){
    res.render('skills/show', {
        skill: skillDB.getOne(req.params.id),
        skillNum: skillDB.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    })
}
