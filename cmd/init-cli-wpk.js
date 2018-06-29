const program = require('commander')
program.usage('<project-name>').parse(process.argv)
let projectName = program.args[0]
console.log(projectName)