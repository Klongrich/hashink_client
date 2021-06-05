import React, { useEffect, useState } from "react";
import Web3 from "web3";

import HashinkABI from "./Hashink.json";

const  HashinkContractAddress = "0x649D13D78bAB1E45E36180aa566519b57e5A6694";

const ONE_ETHER = 1000000000000000000;


export default function NewTesting() {


    async function loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
          return true;
        } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
          return true;
        } else {
          return false;
        }
    }

    async function create_celeberity() {
        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();
        
        const Contract = new web3.eth.Contract(
          HashinkABI.abi,
          HashinkContractAddress
        );
    
        await Contract.methods
          .createCelebrity(1000000, Ethaccounts[0], "Kyle", "Longrich", "Slyle714")
          .send({ from: Ethaccounts[0]})
          .once("receipt", (receipt) => {
            console.log(receipt);
          });
    }

    async function create_request() {
        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();

        const Contract = new web3.eth.Contract(HashinkABI.abi, HashinkContractAddress);

        await Contract.methods
            .CreateRequest("0xe09AAF082E0e16A7cd7096E1c5Bd1Df408535417")
            .send( {from: Ethaccounts[0], value: 1000000})
            .once("Res", (res) => {
                console.log(res);
            })
    }

    async function sign_request() {
        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();

        const Contract = new web3.eth.Contract(HashinkABI.abi, HashinkContractAddress);

        await Contract.methods
            .signRequest("0x3683dd5501be97a1aa585224abf13f5eb969e6044d90d130d28051ba607ca203", "www.google.com")
            .send( {from: Ethaccounts[0]})
            .once("receipt", (res) => {
                console.log(res);
            })
    }

    async function get_request_ID(Celeberity_Address) {
        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();

        const Contract = new web3.eth.Contract(HashinkABI.abi, HashinkContractAddress);

        await Contract.methods
            .CreateRequest(Celeberity_Address)
            .call( {from: Ethaccounts[0], value: 1000000}, function (error, res) {
                console.log("ID: " + res);
            })
    }

    async function check_request_params(request_id) {
        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();

        const Contract = new web3.eth.Contract(HashinkABI.abi, HashinkContractAddress);

        await Contract.methods
            .Request(request_id)
            .call(function (error, res) {
                console.log(res);
            })
    }

    async function check_celebrity_meta(publicKey) {
        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();

        const Contract = new web3.eth.Contract(HashinkABI.abi, HashinkContractAddress);

        await Contract.methods
            .Celeberity(publicKey)
            .call(function (error, res) {
                console.log(res);
            })
    }


    async function check_tokenURI(tokenID) {
        const web3 = window.web3;
        const Ethaccounts = await web3.eth.getAccounts();

        const Contract = new web3.eth.Contract(HashinkABI.abi, HashinkContractAddress);

        await Contract.methods
            .tokenURI(tokenID)
            .call(function (error, res) {
                console.log(res);
            })
    }

    useEffect( async () => {
        await loadWeb3();

        //await create_celeberity();
        //await create_request();
        //await sign_request();

        //await check_celebrity_meta("0x494A8b5b59e404153ec26ceDef91df98D2eeecb5");
        //await get_request_ID("0x494A8b5b59e404153ec26ceDef91df98D2eeecb5");
        //await check_request_params("0x3683dd5501be97a1aa585224abf13f5eb969e6044d90d130d28051ba607ca203");
        //await check_tokenURI(0);

        //console.log("Hello");
    })


    return (
        <>
            <p> This is for testing new web3 calls </p>
        </>
    )
}