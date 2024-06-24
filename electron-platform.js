// Conical Entrypoint.
import * as fs from 'node:fs';
import * as child_process from 'node:child_process';
import * as util from 'node:util';
import * as electron from 'electron';

const exec = util.promisify(child_process.exec);
const handleLsOutput = ({ stdout, stderr }) =>{};
exec('ls',{ env: Object.assign({},process.env,{
  // TODO: Add process cwd here for the installation and everything. we inhire from here!
})}).then(handleLsOutput);

// TODO: Async logging via cluster fork of our self.
