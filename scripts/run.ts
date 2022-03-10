import { ethers } from "hardhat";
import { GreetPortal__factory } from "../typechain";

async function main() {
  const [runner, a1] = await ethers.getSigners();
  const greetPortal = await new GreetPortal__factory(runner).deploy();

  console.log("%s ran GreetPortal contract.", runner.address);
  console.log("GreetPortal contract run at %s.", greetPortal.address);

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
