import EmbarkJS from '../embarkjs';

const PausableWithoutRenounceConfig = {"abiDefinition":[{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3f4ba83a"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x46fbf68e"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5c975abb"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x82dc1ec4"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x8456cb59"},{"constant":false,"inputs":[{"name":"sender","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc4d66de8"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event","signature":"0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event","signature":"0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event","signature":"0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event","signature":"0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"}],"deployedAddress":"0x23c3d18048fA7860bbd065cec3eFfA6Bb231f950","className":"PausableWithoutRenounce","args":[],"gas":438143,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"608060405234801561001057600080fd5b50600436106100725760003560e01c806382dc1ec41161005057806382dc1ec4146100c35780638456cb59146100e9578063c4d66de8146100f157610072565b80633f4ba83a1461007757806346fbf68e146100815780635c975abb146100bb575b600080fd5b61007f610117565b005b6100a76004803603602081101561009757600080fd5b50356001600160a01b0316610209565b604080519115158252519081900360200190f35b6100a7610222565b61007f600480360360208110156100d957600080fd5b50356001600160a01b031661022b565b61007f61027d565b61007f6004803603602081101561010757600080fd5b50356001600160a01b0316610351565b610127610122610407565b610209565b6101625760405162461bcd60e51b81526004018080602001828103825260308152602001806105fa6030913960400191505060405180910390fd5b60665460ff166101b9576040805162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b6066805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6101ec610407565b604080516001600160a01b039092168252519081900360200190a1565b600061021c60338363ffffffff61040b16565b92915050565b60665460ff1690565b610236610122610407565b6102715760405162461bcd60e51b81526004018080602001828103825260308152602001806105fa6030913960400191505060405180910390fd5b61027a81610472565b50565b610288610122610407565b6102c35760405162461bcd60e51b81526004018080602001828103825260308152602001806105fa6030913960400191505060405180910390fd5b60665460ff161561031b576040805162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b6066805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586101ec610407565b600054610100900460ff168061036a575061036a6104ba565b80610378575060005460ff16155b6103b35760405162461bcd60e51b815260040180806020018281038252602e81526020018061064c602e913960400191505060405180910390fd5b600054610100900460ff161580156103de576000805460ff1961ff0019909116610100171660011790555b6103e7826104c0565b6066805460ff191690558015610403576000805461ff00191690555b5050565b3390565b60006001600160a01b0382166104525760405162461bcd60e51b815260040180806020018281038252602281526020018061062a6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61048360338263ffffffff61057816565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b303b1590565b600054610100900460ff16806104d957506104d96104ba565b806104e7575060005460ff16155b6105225760405162461bcd60e51b815260040180806020018281038252602e81526020018061064c602e913960400191505060405180910390fd5b600054610100900460ff1615801561054d576000805460ff1961ff0019909116610100171660011790555b61055682610209565b6105635761056382610472565b8015610403576000805461ff00191690555050565b610582828261040b565b156105d4576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff1916600117905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820460cc1479bda818be0","realArgs":[],"code":"60806040526106ae806100136000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806382dc1ec41161005057806382dc1ec4146100c35780638456cb59146100e9578063c4d66de8146100f157610072565b80633f4ba83a1461007757806346fbf68e146100815780635c975abb146100bb575b600080fd5b61007f610117565b005b6100a76004803603602081101561009757600080fd5b50356001600160a01b0316610209565b604080519115158252519081900360200190f35b6100a7610222565b61007f600480360360208110156100d957600080fd5b50356001600160a01b031661022b565b61007f61027d565b61007f6004803603602081101561010757600080fd5b50356001600160a01b0316610351565b610127610122610407565b610209565b6101625760405162461bcd60e51b81526004018080602001828103825260308152602001806105fa6030913960400191505060405180910390fd5b60665460ff166101b9576040805162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b6066805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6101ec610407565b604080516001600160a01b039092168252519081900360200190a1565b600061021c60338363ffffffff61040b16565b92915050565b60665460ff1690565b610236610122610407565b6102715760405162461bcd60e51b81526004018080602001828103825260308152602001806105fa6030913960400191505060405180910390fd5b61027a81610472565b50565b610288610122610407565b6102c35760405162461bcd60e51b81526004018080602001828103825260308152602001806105fa6030913960400191505060405180910390fd5b60665460ff161561031b576040805162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b6066805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586101ec610407565b600054610100900460ff168061036a575061036a6104ba565b80610378575060005460ff16155b6103b35760405162461bcd60e51b815260040180806020018281038252602e81526020018061064c602e913960400191505060405180910390fd5b600054610100900460ff161580156103de576000805460ff1961ff0019909116610100171660011790555b6103e7826104c0565b6066805460ff191690558015610403576000805461ff00191690555b5050565b3390565b60006001600160a01b0382166104525760405162461bcd60e51b815260040180806020018281038252602281526020018061062a6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61048360338263ffffffff61057816565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b303b1590565b600054610100900460ff16806104d957506104d96104ba565b806104e7575060005460ff16155b6105225760405162461bcd60e51b815260040180806020018281038252602e81526020018061064c602e913960400191505060405180910390fd5b600054610100900460ff1615801561054d576000805460ff1961ff0019909116610100171660011790555b61055682610209565b6105635761056382610472565b8015610403576000805461ff00191690555050565b610582828261040b565b156105d4576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff1916600117905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820460cc1479bda818be05668f091dbbe48e4901a04ba0ada4c49f4a0a568896bc664736f6c634300050a0032","runtimeBytecode":"608060405234801561001057600080fd5b50600436106100725760003560e01c806382dc1ec41161005057806382dc1ec4146100c35780638456cb59146100e9578063c4d66de8146100f157610072565b80633f4ba83a1461007757806346fbf68e146100815780635c975abb146100bb575b600080fd5b61007f610117565b005b6100a76004803603602081101561009757600080fd5b50356001600160a01b0316610209565b604080519115158252519081900360200190f35b6100a7610222565b61007f600480360360208110156100d957600080fd5b50356001600160a01b031661022b565b61007f61027d565b61007f6004803603602081101561010757600080fd5b50356001600160a01b0316610351565b610127610122610407565b610209565b6101625760405162461bcd60e51b81526004018080602001828103825260308152602001806105fa6030913960400191505060405180910390fd5b60665460ff166101b9576040805162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b6066805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6101ec610407565b604080516001600160a01b039092168252519081900360200190a1565b600061021c60338363ffffffff61040b16565b92915050565b60665460ff1690565b610236610122610407565b6102715760405162461bcd60e51b81526004018080602001828103825260308152602001806105fa6030913960400191505060405180910390fd5b61027a81610472565b50565b610288610122610407565b6102c35760405162461bcd60e51b81526004018080602001828103825260308152602001806105fa6030913960400191505060405180910390fd5b60665460ff161561031b576040805162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b6066805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586101ec610407565b600054610100900460ff168061036a575061036a6104ba565b80610378575060005460ff16155b6103b35760405162461bcd60e51b815260040180806020018281038252602e81526020018061064c602e913960400191505060405180910390fd5b600054610100900460ff161580156103de576000805460ff1961ff0019909116610100171660011790555b6103e7826104c0565b6066805460ff191690558015610403576000805461ff00191690555b5050565b3390565b60006001600160a01b0382166104525760405162461bcd60e51b815260040180806020018281038252602281526020018061062a6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61048360338263ffffffff61057816565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b303b1590565b600054610100900460ff16806104d957506104d96104ba565b806104e7575060005460ff16155b6105225760405162461bcd60e51b815260040180806020018281038252602e81526020018061064c602e913960400191505060405180910390fd5b600054610100900460ff1615801561054d576000805460ff1961ff0019909116610100171660011790555b61055682610209565b6105635761056382610472565b8015610403576000805461ff00191690555050565b610582828261040b565b156105d4576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff1916600117905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820460cc1479bda818be05668f091dbbe48e4901a04ba0ada4c49f4a0a568896bc664736f6c634300050a0032","linkReferences":{},"swarmHash":"5668f091dbbe48e4901a04ba0ada4c49f4a0a568896bc664736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"342000","executionCost":"356","totalCost":"342356"},"external":{"addPauser(address)":"infinite","initialize(address)":"infinite","isPauser(address)":"infinite","pause()":"infinite","paused()":"455","unpause()":"infinite"}},"functionHashes":{"addPauser(address)":"82dc1ec4","initialize(address)":"c4d66de8","isPauser(address)":"46fbf68e","pause()":"8456cb59","paused()":"5c975abb","unpause()":"3f4ba83a"},"filename":"C:/Users/Development/Documents/GitHub/RemCare/.embark/contracts/shared-contracts/lifecycle/PausableWithoutRenounce.sol","originalFilename":"contracts\\shared-contracts\\lifecycle\\PausableWithoutRenounce.sol","path":"C:\\Users\\Development\\Documents\\GitHub\\RemCare\\contracts\\shared-contracts\\lifecycle\\PausableWithoutRenounce.sol","type":"file","deploymentAccount":"0x67969108A1d7b1a308B6B77Fdf8F46cc4f035b61","transactionHash":"0x4499657205664d09db18b71f276ca565fcae32e8ba231a6e9ec29f813083773a"};
const PausableWithoutRenounce = new EmbarkJS.Blockchain.Contract(PausableWithoutRenounceConfig);

export default PausableWithoutRenounce;
