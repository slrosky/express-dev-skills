const skills = [
    {id: 1, skill: 'HTML', level: 'intermediate'},
    {id: 2, skill: 'CSS', level: 'intermediate'},
    {id: 3, skill: 'Javascript', level: 'beginner'}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update(id, skill) {
    const skillObj = skills.find(s => s.id === parseInt(id));
    Object.assign(skillObj, skill);
  }
  
  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill, level) {
    skill.id = Date.now() % 1000000;
    skills.level = `${level}`,
    skills.push(skill);
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
      return skills.find(skill => skill.id === parseInt(id));
  }