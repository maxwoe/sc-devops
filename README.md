
# Smart Contract DevOps

This repository contains an exemplary DevOps supported setup for Ethereum smart contract development with Continuous Integration / Continuous Deployment.
The core framework is [hardhat](https://github.com/nomiclabs/hardhat).

## Prerequisites

`Node.js` and `npm` are required.  
For development, the following versions were used:
- `Node.js` – v16.7.0
- `npm` – 7.20.3

## Project Structure

- The standard `package.json` file with several helpful script commands
- `hardhat.config.js` file with prepared settings for development and prod networks
- `.env` file for custom variables
- `husky` folder containing pre-commit hooks configuration
- `abi` folder containing the smart contract ABIs after compilation
- `docs` folder containing the documentation derived from NatSpec annotations in smart contracts
- Several configuration files for additional developers tools:
    - as

## Installation

Run ```npm install``` to install all dependencies specified in `package.json` and prepare husky hooks.

### Excerpt of Important Tools

- [husky](https://github.com/typicode/husky): Modern native git hooks (used to setup pre-commit tasks)
- [hardhat-abi-exporter](https://hardhat.org/plugins/hardhat-abi-exporter.html): Exports generated ABIs on compilation
- [hardhat-contract-sizer](https://hardhat.org/plugins/hardhat-contract-sizer.html): Outputs Solidity contract sizes on compilation
- [hardhat-docgen](https://hardhat.org/plugins/hardhat-docgen.html): Generates documentation from NatSpec comments on compilation
- [hardhat-watcher](https://hardhat.org/plugins/hardhat-watcher.html): Optionally run actions when files change (e.g., auto compile)
- [slither](https://github.com/crytic/slither): Static analysis framework used to inspect Solidity smart contracts
- [solidity-coverage](https://github.com/sc-forks/solidity-coverage): Determines code coverage for Solidity testing
- [solhint](https://github.com/protofire/solhint): A linting utility for Solidity code
- [trufflehog3](https://github.com/feeltheajf/trufflehog3): A secret scanner that searches through git repositories for secrets

### Configuration

### Pre-commit hooks
Linting Smart Contracts
Scanning for Secrets 

### gitleaks
Install
```bash
> curl -s  https://api.github.com/repos/zricethezav/gitleaks/releases/latest |grep browser_download_url  |  cut -d '"' -f 4  | grep '\linux-amd64$'| wget -i -```
> mv gitleaks-linux-amd64 gitleaks
> chmod +x gitleaks
> sudo mv gitleaks /usr/local/bin/
> gitleaks --version
```