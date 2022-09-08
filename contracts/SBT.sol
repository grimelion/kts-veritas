pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SBT is ERC721 {
    constructor() ERC721("Veritas SBT", "VERITAS") {}

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        revert("SBT: Transfer not supported.");
    }

    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) public virtual override {
        revert("SBT: Transfer not supported.");
    }

    // this function is disabled since we don;t want to allow transfers
    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId,
        bytes memory _data
    ) public virtual override {
        revert("SBT: Transfer not supported.");
    }

    function mint() external { // TODO: make signature from server
        // uint256 newItemId = _tokenIds.current();
        // _mint(msg.sender, newItemId);
        // _setTokenURI(newItemId, tokenURI);

        // _tokenIds.increment();
        // return newItemId;
    }
}
