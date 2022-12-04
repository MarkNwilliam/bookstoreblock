export const Abi = [
	
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "asset_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "index",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "bytes6",
				"name": "id",
				"type": "bytes6"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "link",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "quantity",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "AssetJoined",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "asset_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "index",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "bytes6",
				"name": "id",
				"type": "bytes6"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "link",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "quantity",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "AssetUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes6",
				"name": "_id",
				"type": "bytes6"
			},
			{
				"internalType": "string",
				"name": "_link",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_quantity",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_price",
				"type": "int256"
			}
		],
		"name": "register",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes6",
				"name": "source",
				"type": "bytes6"
			},
			{
				"internalType": "bytes6",
				"name": "target",
				"type": "bytes6"
			},
			{
				"internalType": "int256",
				"name": "quantity",
				"type": "int256"
			}
		],
		"name": "transact",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "source_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "source_asset_index",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "target_asset_index",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "bytes6",
				"name": "source",
				"type": "bytes6"
			},
			{
				"indexed": false,
				"internalType": "bytes6",
				"name": "target",
				"type": "bytes6"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "quantity",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "int8",
				"name": "state",
				"type": "int8"
			}
		],
		"name": "TransactionExecuted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes6",
				"name": "_id",
				"type": "bytes6"
			}
		],
		"name": "getAsset",
		"outputs": [
			{
				"internalType": "bytes6",
				"name": "id",
				"type": "bytes6"
			},
			{
				"internalType": "string",
				"name": "link",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "quantity",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "i",
				"type": "int256"
			}
		],
		"name": "getAssetByIndex",
		"outputs": [
			{
				"internalType": "bytes6",
				"name": "id",
				"type": "bytes6"
			},
			{
				"internalType": "string",
				"name": "link",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "quantity",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes6",
				"name": "_id",
				"type": "bytes6"
			}
		],
		"name": "getAssetIndex",
		"outputs": [
			{
				"internalType": "int256",
				"name": "index",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAssetsCount",
		"outputs": [
			{
				"internalType": "int256",
				"name": "uid",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes6",
				"name": "id",
				"type": "bytes6"
			},
			{
				"internalType": "int256",
				"name": "start",
				"type": "int256"
			}
		],
		"name": "getNextTransactionIdInvolvingAsset",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "i",
				"type": "int256"
			}
		],
		"name": "getTransactionByIndex",
		"outputs": [
			{
				"internalType": "bytes6",
				"name": "source",
				"type": "bytes6"
			},
			{
				"internalType": "bytes6",
				"name": "target",
				"type": "bytes6"
			},
			{
				"internalType": "int256",
				"name": "quantity",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "int8",
				"name": "state",
				"type": "int8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTransactionsCount",
		"outputs": [
			{
				"internalType": "int256",
				"name": "uid",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]