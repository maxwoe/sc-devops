const shell = require("shelljs");

// The environment variables are loaded in hardhat.config.ts
const mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
    throw new Error("Please set your MNEMONIC in a .env file");
}

module.exports = {
    //norpc: true,
    //testCommand: 'npm test',
    //compileCommand: 'npm run compile',
    istanbulReporter: ["html", "lcov"],
    /*onCompileComplete: async function (_config) {
        await run("typechain");
    },*/
    onIstanbulComplete: async function (_config) {
        // We need to do this because solcover generates bespoke artifacts.
        shell.rm("-rf", "./artifacts");
        //shell.rm("-rf", "./typechain");
    },
    providerOptions: {
        mnemonic,
        //default_balance_ether: '10000000000000000000000000',
        //total_accounts: 10
    },
    skipFiles: ["mocks", "test"],
};