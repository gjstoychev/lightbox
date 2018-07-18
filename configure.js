const fs = require("fs");
const child_process = require('child_process');

if (!fs.existsSync("node_modules")) {
  installBackendModules();
}

if (!fs.existsSync("frontend")) {
  cloneFrontendProject();
}

function installBackendModules() {
  console.log("Installing backend node_modules...");
  child_process.execSync("npm install", {stdio:[0,1,2]});
  console.log("Backend node_modules installed");
  console.log(" ");
}

function cloneFrontendProject() {
  console.log("Cloning frontend");

  const fs = require("fs-extra");
  const source = 'src'
  const destination = 'frontend'
  
  fs.copy(source, destination, function (err) {
    if (err) {
        console.log('An error occured while cloning the folder.')
        return console.error(err)
    }

    console.log('Cloning completed!')
    console.log(" ");

    installFrontendModules();
  });
}

function installFrontendModules() {
  if (!fs.existsSync("frontend/node_modules")) {
    console.log("Installing front-end node_modules...");
    process.chdir("frontend");
    child_process.execSync("npm install", {stdio:[0,1,2]});
    process.chdir("..");
    console.log('Frontend node_modules intalled')
    console.log(" ");
  }
}
