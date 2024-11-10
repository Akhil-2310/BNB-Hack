import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import EventForm from "./EventForm";
import abi from "../eventsabi.json"

const EventApp = () => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // await window.ethereum.enable();
        const signer = provider.getSigner();
        const address = "0x6a464b31b714ad57d7713ed3684a9441d44b473f"; // Replace with your contract address
        const eventContract = new ethers.Contract(address, abi, signer);
        setContract(eventContract);
      }
    };
    init();
  }, []);

  return (
    <div>
      <h1>Event Management</h1>
      {contract && <EventForm contract={contract} />}
    </div>
  );
};

export default EventApp;
