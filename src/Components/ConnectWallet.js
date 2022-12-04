import React, {useState} from 'react';
import AnimatedPage from "./AnimatedPage";
import { ethers } from 'ethers';
import cogoToast from 'cogo-toast';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import {Abi} from "../utils/abi.js";
//import {Abi} from "../utils/abi2.js";
import { v4 as uuid } from 'uuid';
import {
  RecoilRoot,
  atom,

  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import {  addressState, contractState, idState, AssetCount, TransactionCount , Asset, PriceState,
QuantityState, CoverState, BookState } from "../atoms"
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import {storage} from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {database} from "../firebaseConfig";
import {db} from "../firebaseConfig";
import {ref as Ref,push,child,update,set} from "firebase/database";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import { collection, addDoc } from "firebase/firestore"; 
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const contractAddress = "0xf1d27f47264aD9C987240038a8714a03dDAAeB9E"

var id = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;

var book = null

var cover = null
//const contractAddress = "0xccbB51Ca7e462E38E67F2D9Ecce0F64edC134746"

const ConnectWallet = () => {
  const [basicModal, setBasicModal] = useState(false);
  const navigate = useNavigate();
  // State to store uploaded file
const [file, setFile] = useState("");

const [image, setImage] = useState(null);
const [quantity, setQuantity] = useState(null);
const [price, setPrice] = useState(null);
const [name,setName] = useState(null);
const [coverurl,setCoverurl] = useRecoilState(CoverState);
const [ebookurl,setEbookurl] = useRecoilState(BookState);
const [percent, setPercent] = useState(0);
    const [address, setAddress] =  useRecoilState(addressState);
    const [contract, setContract] = useState(null);
    const [hash, setHash] = useState(null);
    const [ids, setId] = useRecoilState(idState);
    const [assetCount, setAssetCount] = useRecoilState(AssetCount);
    const [TCount, setTCount] = useRecoilState(TransactionCount);
    const [asset, setAsset] = useRecoilState(Asset);
    const [bprice, setBprice] = useRecoilState(PriceState);
    const [bquantity, setBquantity] = useRecoilState(QuantityState);
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
 //let Assetcount = await contract.getPlatform() ;
 //console.log("The platform is "+Assetcount);
 console.log("This is the contract " +contract)
  
        } else {
            console.log('no wallet detected')
            cogoToast.warn("no wallet detected");
        }
    }

    // Handle file upload event and update state
function handleChange(event) {

  setFile(event.target.files[0]);
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
    }

    const AssetsCount = async() => {
      try{
let Assetcount = await contract.getAssetsCount();
let TransactionCount = await contract.getTransactionsCount();
setTCount(TransactionCount);
let GetAsset = await contract.getAssetByIndex(1);
setAsset(GetAsset);
setAssetCount(Assetcount);

console.log("The Asset count is "+Assetcount);
console.log("The Transaction count is "+TransactionCount);
console.log("The asset is "+GetAsset);

navigate('/Success');
      }catch(e){
 console.log("The platform is "+e.message);
      }
    }
   
  
const handleUpload = async (e) => {
  e.preventDefault();
if( !address ){
  cogoToast.warn("Please Connect your wallet");
  return
}
if(!name || !price  || !quantity ){
  cogoToast.warn("Please Fill in everything");
  return
}
  if (!image) {
    cogoToast.warn("Please upload an image first!");
    return    
  }
  if (!file) {
    cogoToast.warn("Please upload an Book first!");
    return
  }
  else{
  cogoToast.loading("Please wait for the Magic to happen!");


    const storageRef = ref(storage, `/Ebooks/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const storageRef2 = ref(storage, `/CoverImages/${image.name}`);
    const uploadTask2 = uploadBytesResumable(storageRef2, image);
  
  uploadTask2.on(
  "state_changed",
  (snapshot) => {
  const percent = Math.round(
  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  );
  },
  (err) => cogoToast.warn("An Error happened Please repeat the process"),
  () => {
  getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    setEbookurl(url);
    book = url
    cogoToast.loading("Please wait for the Magic to happen!");
  console.log(book);
  }).then(() => {
  getDownloadURL(uploadTask2.snapshot.ref).then((url) => {
    setCoverurl(url);
    cover = url
    cogoToast.loading("Please wait for the Magic to happen!");
    console.log(cover);
    }).then( () => {
      cogoToast.loading("Please wait for the Magic to happen!");
    set(Ref(database, "users/"+address+name), {
      Name : name,
      Price:price,
      Asset_id:id,
      Address:address,
      Quantity:quantity,
    Cover: cover,
    Ebook: book,
    timestamp: Date.now()
    })

})
})
  }
  );
 

}

}


const CreateNft = async(e) =>{
  e.preventDefault();


  var registernft = async () =>{
    cogoToast.loading("Please wait for the Magic to happen!");

      var newQuantity = parseInt(quantity);
      var newPrice = parseInt(price);
    let mycontract = await contract.register("0x00"+id,book,newQuantity,newPrice)
    console.log(mycontract.hash);
    setHash(mycontract.hash)
    cogoToast.loading("Please wait for the Magic to happen!");
    cogoToast.loading("Please wait for the Magic to happen!");
  await mycontract.wait();
    console.log("Welcome to the blockchain")
    let Assetcount = await contract.getAssetsCount();
    cogoToast.loading("Please wait for the Magic to happen!");
    let TransactionCount = await contract.getTransactionsCount();
    setTCount(parseInt(TransactionCount._hex));
    setAssetCount(parseInt(Assetcount._hex));
    setBprice(newPrice);
    setBquantity(newQuantity);
    navigate('/Success');
    }

    cogoToast.loading('Please wait for the Magic to happen!...').then(() => {
      registernft()
    
    });


}

function next(){
  navigate('/Success',{state:{id:1,name:'sabaoon'}});
}
const handleInputChange = (e) => {
  const {id , value} = e.target;
  if(id === "Name"){
      setName(value);
  }
  if(id === "Price"){
      setPrice(value);
  }
  if(id === "Quantity"){
      setQuantity(value);
  }



}


    return(
      <AnimatedPage>
        <div>

        <header aria-label="Page Header">
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <div class="text-center sm:text-left">
              <button onClick={() => navigate(-1)}>Go back 1 Page</button>
                <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Welcome To the Next Revolution!
                </h1>
        
                <p class="mt-1.5 text-sm text-gray-500" onClick={() => next()}>
                  Let's get started! 🎉
                </p>
              </div>
        
              <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <button
                  class="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                  type="button"
                >
                  <span class="text-sm font-medium"> Support </span>
        
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
                {  address ? (
                     <button
                  class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button" 
                >
                 Connected
                </button>
                ) : 
                <button
                  class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button" onClick={handleAuth}
                >
                 Connect Wallet
                </button>
        }
              </div>
            </div>
          </div>
        </header>
        



        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="ml-5 px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Upload Your Asset</h3>
              <p className="mt-1 text-sm text-gray-600">
                Let IPO your Content
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        
                        <input
                          type="name"
                          name="name"
                          value={name} 
                          onChange = {(e) => handleInputChange(e)}
                          id="Name"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter Asset Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Number of Shares
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="Quantity"
                        name="quantity"
                        rows={1}
                        type="number"
                        pattern="[0-9]*"
                        onKeyPress={(event) => {
        if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
          event.preventDefault();
        }
      }}
                        value={quantity} onChange = {(e) => handleInputChange(e)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="10"
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      The shares you add are permanent
                    </p>
                  </div>
                  { hash ? <MDBModal show="true" setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Please Wait</MDBModalTitle>
              
            </MDBModalHeader>
            <MDBModalBody>The smart contract needs some more time</MDBModalBody>

           
          </MDBModalContent>
        </MDBModalDialog>

        </MDBModal>
        :
       <p> Note: Uploading data takes time</p> 
        }
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Price per share
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="Price"
                        name="price"
                        type="number"
                        pattern="[0-9]*"
                        onKeyPress={(event) => {
        if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
          event.preventDefault();
        }
      }}
                        value={price} onChange = {(e) => handleInputChange(e)}
                        rows={1}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="7"
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                     Currency is Matic
                    </p>
                    </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a Image</span>
                            <input
                             id="file-upload" name="file-upload" type="file" className="sr-only"
                             onChange = {(e) =>  handleImageChange(e)}
                            class=" dark:placeholder-gray-400" accept="image/x-png,image/gif,image/jpeg"/>
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>




                <div class ="pl-5">
                    <label className="block text-sm font-medium text-gray-700">Book</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only"
                            onChange = {(e) => handleChange(e)}
                            class=" dark:placeholder-gray-400" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                  </div>
            


                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  { coverurl ?

                  <button
                    
                    onClick={CreateNft}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Create Nft
                  </button>
:
                  <button
                    type="submit"
                    onClick={handleUpload}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                  }

<button
                  class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button" onClick={AssetsCount}
                >
                  Get Asset Count
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      
       

                </div>
                </AnimatedPage>
            )
        }

export default ConnectWallet;