// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract GreetPortal {

    uint256 public totalGreetings;

    constructor() {
        // console.log("Wassap!");
    }

    function greet() public {
        totalGreetings += 1;
        // console.log("%s has greeted!", msg.sender);
    }

    function getTotalGreetings() public view returns (uint256) {
        // console.log(
        //     "There %s %d greeting%s total!",
        //     totalGreetings == 1 ? "is" : "are",
        //     totalGreetings,
        //     totalGreetings == 1 ? "" : "s"
        // );

        return totalGreetings;
    }
}
