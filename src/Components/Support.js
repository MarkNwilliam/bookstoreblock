import React, {useState} from 'react';

import { ethers } from 'ethers';

import {Abi} from "../utils/abi.js";

import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Nav from "./Nav"
import Footer from "./Footer";
export default  function Support(){
  
    return (
      <div >
        <Nav />
      <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">Lets guide you to your first ebook nft.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does one create an ebook nft?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">On the home page click on get started. Then connect to your wallet. Fill in the form and click on submit. after submit the button create nft wi appear click on it and pay the matic gas fee. Processing may take some time but after you will automatically be sent to the success page</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How do i buy shares in other books?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Note: Unfortunately You cannot yet buy shares but we are working hard to build this</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How do i make money from my nfts?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Through the sell of shares. </p>
			</details>
		</div>
	</div>
</section>
<Footer />
      </div>
    );
  };