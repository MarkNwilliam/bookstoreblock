import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { ethers } from 'ethers';
import cogoToast from 'cogo-toast';
import Nav from "./Nav"
import {
  RecoilRoot,
  atom,

  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import {  addressState, contractState, idState, AssetCount, TransactionCount , Asset, PriceState,
  QuantityState } from "../atoms"

import {Abi} from "../utils/abi.js";

const contractAddress = "0xf1d27f47264aD9C987240038a8714a03dDAAeB9E";

export default function Success() {

  const navigate = useNavigate();
  // State to store uploaded file
const [file, setFile] = useState("");

const [image, setImage] = useState(null);
const [quantity, setQuantity] = useState(null);
const [price, setPrice] = useState(null);
const [name,setName] = useState(null);
const [coverurl,setCoverurl] = useState(null);
const [ebookurl,setEbookurl] = useState(null);
const [percent, setPercent] = useState(0);
    const [address, setAddress] =  useRecoilState(addressState);
    const [contract, setContract] = useState(null);
    const [ids, setId] = useRecoilState(idState);
    const [assetCount, setAssetCount] = useState(null);
    const [TCount, setTCount] = useState(null);
    const [asset, setAsset] = useRecoilState(Asset);
    const [bquantity, setBquantity] = useRecoilState(QuantityState);
    const [bprices, setBprice] = useRecoilState(PriceState);

  
    const handleAuth = async() => {
        const { ethereum } = window;
        if(ethereum) {

 const provider = new ethers.providers.Web3Provider(window.ethereum);
 await provider.send("eth_requestAccounts", []);
 const signer = provider.getSigner();
 const myAddress = await signer.getAddress();
 setAddress(myAddress);
 const connectedContract = new ethers.Contract(contractAddress, Abi, signer);
 setContract(connectedContract);
 cogoToast.success("You are Connected");
 let Assetcount = await contract.getAssetsCount();
 let TransactionCount = await contract.getTransactionsCount();
 setTCount(parseInt(TransactionCount._hex));
 
 let GetAsset = await contract.getAssetByIndex(1);
 setAsset(GetAsset);
 setAssetCount(parseInt(Assetcount._hex));
 
 console.log("The Asset count is "+Assetcount);
 console.log("The Transaction count is "+TransactionCount);
 console.log("The asset is "+GetAsset);
 
 
 console.log("This is the contract " +contract)
  
        } else {
            console.log('no wallet detected')
            cogoToast.warn("no wallet detected");
        }
    }

    useEffect(() => {
      const getContent = async () => {
      let Assetcount = await contract.getAssetsCount();
 let TransactionCount = await contract.getTransactionsCount();
 setTCount(parseInt(TransactionCount._hex));
 let GetAsset = await contract.getAssetByIndex(1);
 setAsset(GetAsset);
 setAssetCount(parseInt(Assetcount._hex));
 
 console.log("The Asset count is "+Assetcount);
 console.log("The Transaction count is "+TransactionCount);
 console.log("The asset is "+GetAsset);
 
 
 console.log("This is the contract " +contract)
      }

      getContent();

     
    }, contract);

    return(
      <div>
        
      <Nav />

<div className="w-full mx-auto space-y-4 text-center">
	
		<h1 className="mx=5 text-4xl font-bold leading-tight md:text-5xl">WELL DONE YOU JUST MADE YOUR NFT</h1>
		<p className="text-sm dark:text-gray-400">Your address is
			<a rel="noopener noreferrer" href="#" target="_blank" className="underline dark:text-violet-400">
				<span itemprop="name"> {address}</span>
			</a>
			<time datetime="2021-02-12 15:34:18-0200"></time>
		</p>
	</div>


  <button
                  class="content-center block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring content-center"
                  type="button" onClick={handleAuth}
                >
                  Connect to get Your Stats
                </button>

<section class="px-4 py-12 mx-auto max-w-7xl">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Total Assets Worldwide</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">{assetCount}</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">Total transactions Worldwide</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Total transactions Worldwide</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">{TCount}</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">See all expense tracking</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Asset Valuation</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">{bprices*bquantity}Matics</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">For your last Nft</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Number of Your Asset Shares</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">{bquantity}</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">For your last Nft</a>
    </div>
  </div>
</section>
</div>
    )
}
