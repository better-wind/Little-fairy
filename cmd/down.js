const download = require('download-git-repo')

download('luyi10year/template-cli', 'test/tmp', function (err) {
    console.log(err ? 'Error' : 'Success')
})