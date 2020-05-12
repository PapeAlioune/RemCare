import EmbarkJS from '../embarkjs';

const PauserRoleWithoutRenounceConfig = {"abiDefinition":[{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x46fbf68e"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x82dc1ec4"},{"constant":false,"inputs":[{"name":"sender","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc4d66de8"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event","signature":"0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event","signature":"0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"}],"deployedAddress":"0x198e5098df110dB3fb9Be06B34c372720ba46756","className":"PauserRoleWithoutRenounce","args":[],"gas":290878,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"608060405234801561001057600080fd5b50600436106100415760003560e01c806346fbf68e1461004657806382dc1ec414610080578063c4d66de8146100a8575b600080fd5b61006c6004803603602081101561005c57600080fd5b50356001600160a01b03166100ce565b604080519115158252519081900360200190f35b6100a66004803603602081101561009657600080fd5b50356001600160a01b03166100e7565b005b6100a6600480360360208110156100be57600080fd5b50356001600160a01b031661013e565b60006100e160338363ffffffff6101f716565b92915050565b6100f76100f261025e565b6100ce565b6101325760405162461bcd60e51b81526004018080602001828103825260308152602001806103326030913960400191505060405180910390fd5b61013b81610262565b50565b600054610100900460ff168061015757506101576102aa565b80610165575060005460ff16155b6101a05760405162461bcd60e51b815260040180806020018281038252602e815260200180610384602e913960400191505060405180910390fd5b600054610100900460ff161580156101cb576000805460ff1961ff0019909116610100171660011790555b6101d4826100ce565b6101e1576101e182610262565b80156101f3576000805461ff00191690555b5050565b60006001600160a01b03821661023e5760405162461bcd60e51b81526004018080602001828103825260228152602001806103626022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b3390565b61027360338263ffffffff6102b016565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b303b1590565b6102ba82826101f7565b1561030c576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff1916600117905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820cc2002715abe192c60","realArgs":[],"code":"60806040526103e6806100136000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806346fbf68e1461004657806382dc1ec414610080578063c4d66de8146100a8575b600080fd5b61006c6004803603602081101561005c57600080fd5b50356001600160a01b03166100ce565b604080519115158252519081900360200190f35b6100a66004803603602081101561009657600080fd5b50356001600160a01b03166100e7565b005b6100a6600480360360208110156100be57600080fd5b50356001600160a01b031661013e565b60006100e160338363ffffffff6101f716565b92915050565b6100f76100f261025e565b6100ce565b6101325760405162461bcd60e51b81526004018080602001828103825260308152602001806103326030913960400191505060405180910390fd5b61013b81610262565b50565b600054610100900460ff168061015757506101576102aa565b80610165575060005460ff16155b6101a05760405162461bcd60e51b815260040180806020018281038252602e815260200180610384602e913960400191505060405180910390fd5b600054610100900460ff161580156101cb576000805460ff1961ff0019909116610100171660011790555b6101d4826100ce565b6101e1576101e182610262565b80156101f3576000805461ff00191690555b5050565b60006001600160a01b03821661023e5760405162461bcd60e51b81526004018080602001828103825260228152602001806103626022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b3390565b61027360338263ffffffff6102b016565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b303b1590565b6102ba82826101f7565b1561030c576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff1916600117905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820cc2002715abe192c60d16118079d9ed3df7acae2b3367249e1d628c9bcd1febe64736f6c634300050a0032","runtimeBytecode":"608060405234801561001057600080fd5b50600436106100415760003560e01c806346fbf68e1461004657806382dc1ec414610080578063c4d66de8146100a8575b600080fd5b61006c6004803603602081101561005c57600080fd5b50356001600160a01b03166100ce565b604080519115158252519081900360200190f35b6100a66004803603602081101561009657600080fd5b50356001600160a01b03166100e7565b005b6100a6600480360360208110156100be57600080fd5b50356001600160a01b031661013e565b60006100e160338363ffffffff6101f716565b92915050565b6100f76100f261025e565b6100ce565b6101325760405162461bcd60e51b81526004018080602001828103825260308152602001806103326030913960400191505060405180910390fd5b61013b81610262565b50565b600054610100900460ff168061015757506101576102aa565b80610165575060005460ff16155b6101a05760405162461bcd60e51b815260040180806020018281038252602e815260200180610384602e913960400191505060405180910390fd5b600054610100900460ff161580156101cb576000805460ff1961ff0019909116610100171660011790555b6101d4826100ce565b6101e1576101e182610262565b80156101f3576000805461ff00191690555b5050565b60006001600160a01b03821661023e5760405162461bcd60e51b81526004018080602001828103825260228152602001806103626022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b3390565b61027360338263ffffffff6102b016565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b303b1590565b6102ba82826101f7565b1561030c576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff1916600117905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72305820cc2002715abe192c60d16118079d9ed3df7acae2b3367249e1d628c9bcd1febe64736f6c634300050a0032","linkReferences":{},"swarmHash":"d16118079d9ed3df7acae2b3367249e1d628c9bcd1febe64736f6c634300050a","gasEstimates":{"creation":{"codeDepositCost":"199600","executionCost":"221","totalCost":"199821"},"external":{"addPauser(address)":"infinite","initialize(address)":"infinite","isPauser(address)":"infinite"},"internal":{"_addPauser(address)":"infinite","_removePauser(address)":"infinite"}},"functionHashes":{"addPauser(address)":"82dc1ec4","initialize(address)":"c4d66de8","isPauser(address)":"46fbf68e"},"filename":"C:/Users/Development/Documents/GitHub/RemCare/.embark/contracts/shared-contracts/lifecycle/PauserRoleWithoutRenounce.sol","originalFilename":"contracts\\shared-contracts\\lifecycle\\PauserRoleWithoutRenounce.sol","path":"C:\\Users\\Development\\Documents\\GitHub\\RemCare\\contracts\\shared-contracts\\lifecycle\\PauserRoleWithoutRenounce.sol","type":"file","deploymentAccount":"0x67969108A1d7b1a308B6B77Fdf8F46cc4f035b61","transactionHash":"0x63f690e4791801ab9961c219a0cac15502036b702f123595a18fc8e244573bab"};
const PauserRoleWithoutRenounce = new EmbarkJS.Blockchain.Contract(PauserRoleWithoutRenounceConfig);

export default PauserRoleWithoutRenounce;
