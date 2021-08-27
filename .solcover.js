const shell = require("shelljs");

// The environment variables are loaded in hardhat.config.ts
const mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
  throw new Error("Please set your MNEMONIC in a .env file");
}

module.exports = {
  istanbulReporter: ["html", "lcov"],
  onIstanbulComplete: async function (_config) {
    // We need to do this because solcover generates bespoke artifacts.
    shell.rm("-rf", "./artifacts");
  },
  providerOptions: {
    mnemonic,
    //default_balance_ether: '10000000000000000000000000',
    //total_accounts: 10
  },
  skipFiles: ["mocks", "test"],
};
