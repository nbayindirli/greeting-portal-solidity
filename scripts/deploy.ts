import { ethers } from "hardhat";
import { GreetPortal__factory } from "../typechain";

async function main() {
  const [deployer, a1] = await ethers.getSigners();
  const greetPortal = await new GreetPortal__factory(deployer).deploy();

  console.log("Deployer address:", deployer.address);
  console.log("Deployer account balance:", await deployer.getBalance());
  console.log("GreetPortal contract address:", greetPortal.address);

  await greetPortal.getTotalGreetings();
  await greetPortal.greet();
  await greetPortal.getTotalGreetings();
  await greetPortal.connect(a1).greet();
  await greetPortal.greet();
  await greetPortal.getTotalGreetings();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
