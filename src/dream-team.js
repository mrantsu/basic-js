const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (
    !Array.isArray(members)
    || members.every((item) => typeof item !== "string")
  ) return false;
  const filteredMembers = members.filter((item) => typeof item === "string");
  const convertedMembers = filteredMembers.map((item) => item.trim().toUpperCase())
  const sortedMembers = convertedMembers.sort();
  const createdTeam = sortedMembers.map((item) => item[0]).join('');
  return createdTeam;
}

module.exports = {
  createDreamTeam
};
