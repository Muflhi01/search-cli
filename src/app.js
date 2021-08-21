const { program } = require('commander')
const { search } = require('./search');

module.exports.app = function() {

    program
        .option('-u, --only-urls', 'output urls only')
        .option('-v, --verbose', 'output extra debugging')
        .option('-f, --file <string>', 'output file in json format')
        .option('-n, --no-output', 'no output (good if -o is activated)')

    program.argument(
        'query',
        'The query for the search'
    )
  
    program.parse(process.argv);
    search(program.args[0], program.opts())
}
