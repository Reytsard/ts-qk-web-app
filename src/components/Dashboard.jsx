import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Dashboard() {
  const props = useLoaderData();
  const [queueList, setQueueList] = useState([]);
  const [pudList, setPudList] = useState([]);
  useEffect(() => {
    setQueueList(props.queueData);
    setPudList(props.pudData);
  }, [props]);
  return (
    <div className="flex w-full h-full">
      <>
        <ul className="left-0 h-full w-[300px] bg-red-300 text-black flex flex-col items-center justify-evenly bg-orange">
          <li>logs</li>
          <li>Summary</li>
          <li>Signout</li>
        </ul>
      </>
      <div className="w-full h-full bg-center bg-cover bg-dashboard">
        <div className="w-full h-full right-1 top-1 grid grid-cols-[2fr_1fr] grid-rows-3 bg-opacity-50">
          <div className="col-span-2 pt-10 pl-40">Welcome USERNAME!</div>
          <div className="row-start-2">Chart for profit for the day</div>
          <div className="row-start-3">Transactions of the day</div>
          <div className="col-start-2 row-start-2">On the right Queue</div>
          <div className="col-start-2 row-start-3">
            below queue is for delivery or pickup
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

export const dashboardLoader = async () => {
  const queue = await axios.get(
    "https://qk-app-backend.vercel.app/record/pending"
  );
  const queueData = queue.data[0];
  const pud = await axios.get(
    "https://qk-app-backend.vercel.app/record/pending"
  );
  //get data of user too, you will have to adjust backend to accept idnumber as params in backend
  const pudData = pud.data[0];

  return {
    props: {
      queueData: queueData,
      pudData: pudData,
    },
  };
};
