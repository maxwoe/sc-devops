const hre = require("hardhat");

async function main() {
  const contractName = "Greeter";
  console.log(`Network: ${hre.network.name}`);
  console.log(`Verifying ${contractName}...`);

  const deployment = await getDeployment(contractName);
  // console.log(deployment);

  await hre
    .run("verify:verify", {
      address: deployment.address,
      constructorArguments: deployment.args,
    })
    .catch(ignoreAlreadyVerifiedError);
}

const getDeployment = async name => {
  const { deployments } = hre;
  return await deployments.get(name);
};

// const getContract = async (name) => {
//     const { deployments } = hre
//     const signers = await hre.ethers.getSigners()
//     return hre.ethers.getContractAt(name, (await deployments.get(name)).address, signers[0])
// }

function ignoreAlreadyVerifiedError(err) {
  if (err.message.includes("Contract source code already verified")) {
    console.log("Contract already verfied, skipping");
  } else {
    throw err;
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

// To verify call this cmd
// npx hardhat run --network ropsten scripts/verify.js
