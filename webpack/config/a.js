process.env.NODE_ENV = '111111111'
console.log(process.env.NODE_ENV)
function exec (cmd) {
    console.log(require('child_process').execSync(cmd).toString().trim())
}

