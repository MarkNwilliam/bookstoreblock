import React, {useState} from 'react';

import { ethers } from 'ethers';

import {Abi} from "../utils/abi.js";

import {Link, Routes, Route, useNavigate} from 'react-router-dom';

import Nav from "./Nav";
import Footer from "./Footer";

  import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

  const features = [
    {
      name: 'Cheap and affordable',
      description:
        'Create an NFt ebook for so little less that 0.5 dollars',
      icon: GlobeAltIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Sel and But Shares at no hidden cost all cost are oublicaly known',
      icon: ScaleIcon,
    },
    {
      name: 'Create NFTs',
      description:
        'Create Ebook nfts',
      icon: BoltIcon,
    },
    {
      name: 'View all Assets',
      description:
        'Get data on the number of assets and transactions of shares and assets on the blockchain',
      icon: DevicePhoneMobileIcon,
    },
  ]
  
  export default  function Features(){
    return (
      <div>
      <Nav />
      <div className="bg-white py-20 sm:py-32 lg:py-35">
      
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">Digital Dividend paying Assets</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The new NFTs </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
             Create Ebook Nfts on the polygon blockchain
            </p>
          </div>
  
          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
      <Footer />
      </div>

    )
  }