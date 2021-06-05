// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Hashink is ERC721("HashInk", "HI") {

    struct requests {
        address payable to;
        address from;
        uint256 price;
    }

    struct celeberity {
        bool regeister;
        uint256 price;
        string frist_name;
        string last_name;
        string internet_name;
    }

    mapping (bytes32 => requests) public Request;
    mapping (address => celeberity ) public Celeberity;

    event CelebrityCreated(uint256 _price, address _publicKey, string firstName, string lastName, string internetName);
    event RequestCreated(address _to, address _from, uint256 _price);
    event RequestSigned(bytes32 id, string nft_meta);

    //have to modify this to update the tokenURI correctly.
    function mint(address to, uint256 tokenId, string memory tokenURI) public {
        _mint(to, tokenId, tokenURI);
    }

    //Can change this to make this an admin only function
    function createCelebrity(uint256 _price, address _publicKey, string memory firstName, string memory lastName, string memory internetName ) public  {
        require(Celeberity[_publicKey].regeister != true, "Celeberity already created");
        require(_publicKey == msg.sender, "Sender is not owener of key");

        Celeberity[_publicKey].price = _price;
        Celeberity[_publicKey].frist_name = firstName;
        Celeberity[_publicKey].last_name = lastName;
        Celeberity[_publicKey].internet_name = internetName;
 
        emit CelebrityCreated(_price, _publicKey, firstName, lastName, internetName); 
    }

    function CreateRequest(address payable _to) public payable returns (bytes32) {
        bytes32 id;
        id = keccak256(abi.encode(_to, msg.sender, msg.value));
        
        Request[id].to = _to;
        Request[id].from = msg.sender;
        Request[id].price = msg.value;

        emit RequestCreated(_to, msg.sender, msg.value);
        return (id);
    }


    //Has to send our cut to us as well.
    function signRequest(bytes32 _id, string memory nft_meta) public {
        require(Request[_id].to == msg.sender, "Signer is not who request was sent to");

        //Transfer ETH to signer
        Request[_id].to.transfer(Request[_id].price);
        
        //Mint the new NFT to the address of person who requested it.
        mint(Request[_id].from, 0, nft_meta);
        
        emit RequestSigned(_id, nft_meta);
        delete Request[_id];
    }

}