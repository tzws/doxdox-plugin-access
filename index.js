/**
 * Json plugin for doxdox.
 *
 * @example parseInputs(inputs, {'parser': 'dox', 'layout': 'json'}).then(content => console.log(content));
 * @param {Array} data Methods parsed using a doxdox parser.
 * @return {Promise} Promise with generated content.
 * @public
 */

const plugin = data => new Promise((resolve, reject) => {

  var result = {};
  data.files.filter(item => item.methods.length > 0).map(everyEach => 
    {
      everyEach.methods.map(m1 => {
        result[ /^__/.exec(m1.name) ? m1.name.substring(2) : m1.name ] = m1.tags.access.map(elem => elem.name).join('');
      });
    }
  );

  return resolve((JSON.stringify(result, null, 2)));
});

module.exports = plugin;
