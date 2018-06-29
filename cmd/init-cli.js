
var program = require('commander')


program.version(require('./a').version)
    .usage('<command> [项目名称]')
    .command('wpk', 'webpack构建js项目')
    .parse(process.argv)

    // .option('wpk, --name <path>','构建项目')
// console.log(process.argv)
// console.log(program.name)


