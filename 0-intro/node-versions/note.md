Use `nvm` to manage multiple versions on NodeJS on a single machine

- Install multiple versions
- List installed versions: `nvm ls`
- Switch between versions: `nvm use <version>`
- Set default version: `nvm alias default <version>`
- Local `.nvmrc` file: specified the desired NodeJS version for 1 project. Running `nvm use` in that directory will switch to the specified version (only in that terminal session).