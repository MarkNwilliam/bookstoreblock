import React, {useState} from 'react';

import { ethers } from 'ethers';

import {Abi} from "../utils/abi.js";

import cogoToast from 'cogo-toast';

const contractAddress = "0x73459A27a8C4b88BC4fe807E7F092c878dE3Dfde"

const Create = () => {
    const [address, setAddress] = useState('')
    const [contract, setContract] = useState({});
    const handleAuth = async() => {
        const { ethereum } = window;
        if(ethereum) {

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const myAddress = await signer.getAddress();
          setAddress(myAddress);
  
 try{
 
  const connectedContract = new ethers.Contract(contractAddress, Abi, signer);
 setContract(connectedContract)
 cogoToast.success("Success!");
 }
 catch (e) {
  console.log('Error')
}

        } else {
            console.log('no wallet detected')
        }
    }
    return(
        <div>

<header aria-label="Page Header">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome Back, Barry!
        </h1>

        <p class="mt-1.5 text-sm text-gray-500">
          Let's write a new blog post! 🎉
        </p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
          class="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span class="text-sm font-medium"> View Website </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1.5 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>

        <button
          class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          Create Post
        </button>

        {  address ? (<h1> Hello {address} </h1>) : 
  <button onClick={handleAuth}> Connect Wallet</button>
            
        }
      </div>
    </div>
  </div>
</header>

     
        </div>
    )
}

export default Create;