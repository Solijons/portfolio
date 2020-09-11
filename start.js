const { exec } = require('child_process');

const PORT = process.env.PORT || 8080;

exec(`node node_modules/serve/bin/serve -p ${PORT} -s build/`);