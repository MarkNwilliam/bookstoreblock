import React, {useState, useEffect} from 'react';
import Nav from "./Nav";

import { ethers } from 'ethers';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBBtn,
    MDBCol
  } from 'mdb-react-ui-kit';
import {Abi} from "../utils/abi.js";
import {database} from "../firebaseConfig";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { getDatabase, ref, child, get } from "firebase/database";

const contractAddress = "0x73459A27a8C4b88BC4fe807E7F092c878dE3Dfde"
var id = null
var price = null
var quantity = null
const Nfts = () => {
    const [address, setAddress] = useState('');
    const [shares, setShares] = useState('')
    const [contract, setContract] = useState({});
    const [content, setContent] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleInputChange = (e) => {
    setShares(e.target.value)
   console.log(e.target.value)
   console.log(shares) 
    
    }
    
    const dbRef = ref(database);
get(child(dbRef, `users`)).then((snapshot) => {
  if (snapshot.exists()) {
    setContent(snapshot.val())
    //console.log(Object.entries(content));
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

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

        } else {
            console.log('no wallet detected')
        }
    }

    const AssetsCount = async() => {
      try{

let Assetcount = await contract.getAssetsCount();



console.log("The Asset count is "+Assetcount);



      }catch(e){
 console.log("The platform is "+e.message);
      }
    }

    useEffect(() => {
      const getContent = async () => {
      let Assetcount = await contract.getAssetsCount();
 let TransactionCount = await contract.getTransactionsCount();

 let GetAsset = await contract.getAssetByIndex(1);

 
 console.log("The Asset count is "+Assetcount);
 console.log("The Transaction count is "+TransactionCount);
 console.log("The asset is "+GetAsset);
 
 
 console.log("This is the contract " +contract)
      }

      getContent();

     
    }, contract);

  const Buy = ( id, price, quantity) =>async() => {
 

      AssetsCount()

    }
    return(
        <div>

<Nav />

<p clas="content-center mx-10"> Note: Unfortunately You cannot yet buy shares but we are working hard to build this </p> 
{  address ? (
                     <button
                  class="mx-3 block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button" 
                >
                 Connected
                </button>
                ) : 
                <button
                  class=" mx-3 block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button" onClick={handleAuth}
                >
                 Connect Wallet
                </button>
        }

<MDBRow className='row-cols-1 row-cols-md-3 g-4 my-2 '>

{Object.entries(content).map((obj, index) => (
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={obj[1].Cover}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{obj[1].Name}</MDBCardTitle>
            <MDBCardText>
            Price per Share is {obj[1].Price} Matic and Total Shares is {obj[1].Quantity}
            <TextField
            autoFocus
            margin="dense"
            id="quantity"
            onChange = {(e) => handleInputChange(e)}
            label="Number of Shares"
            type="numer"
            fullWidth
            variant="standard"
          />
            </MDBCardText>
            <MDBBtn onClick={Buy(  obj[1].Asset_id, obj[1].Price, obj[1].Quantity )}  >Buy</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
))
}


    </MDBRow>
        </div>
    )
}

export default Nfts;