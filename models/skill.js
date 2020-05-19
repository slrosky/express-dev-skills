const skills = [
    {id: 1, skill: 'HTML', level: 'intermediate'},
    {id: 2, skill: 'CSS', level: 'intermediate'},
    {id: 3, skill: 'Javascript', level: 'beginner'}
  ];

  module.exports = {
    getAll,
    getOne
  };

  function getAll() {
    return skills;
  }

  function getOne(id) {
      return skills.find(skill => skill.id === parseInt(id));
  }