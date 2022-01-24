const { exec } = require("child_process");

const key = "1234567890ABCDEF"
const json = {
    field1: "Some data",
    field2: "More stuff",
    number1: 4,
    float1: 5.60
}

const data = JSON.stringify(json)
exec(`node encrypt.js ${key} '${data}'`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(stdout);
})