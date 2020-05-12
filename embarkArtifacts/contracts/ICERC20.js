import EmbarkJS from '../embarkjs';

const ICERC20Config = {"abiDefinition":[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}],"className":"ICERC20","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"","realArgs":[],"code":"","runtimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","balanceOfUnderlying(address)":"3af9e669","exchangeRateCurrent()":"bd6d894d","isCToken()":"fe9c44ae","mint(uint256)":"a0712d68","redeem(uint256)":"db006a75","redeemUnderlying(uint256)":"852a12e3","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"filename":"C:/Users/Development/Documents/GitHub/RemCare/.embark/contracts/shared-contracts/interfaces/ICERC20.sol","originalFilename":"contracts\\shared-contracts\\interfaces\\ICERC20.sol","path":"C:\\Users\\Development\\Documents\\GitHub\\RemCare\\contracts\\shared-contracts\\interfaces\\ICERC20.sol","type":"file","deploymentAccount":"0xFdb1E986D5D22DA4904755488Ae799e89224e2d8"};
const ICERC20 = new EmbarkJS.Blockchain.Contract(ICERC20Config);

export default ICERC20;