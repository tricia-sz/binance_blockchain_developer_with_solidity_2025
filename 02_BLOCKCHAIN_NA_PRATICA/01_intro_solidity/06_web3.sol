 // SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract HelloWorld{
    string public hello = "Hello world!";
    string public name = "";

    function setName(string memory _name) public {
        name = _name;
    }

    function setHello(string memory _hello) public {
        hello = _hello;
    }

}
 