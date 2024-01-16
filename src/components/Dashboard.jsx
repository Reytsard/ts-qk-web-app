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
    <div className="h-full w-full flex">
      <>
        <ul className="left-0 h-full w-[300px] bg-red-300 text-black flex flex-col items-center justify-evenly ">
          <li>logs</li>
          <li>Summary</li>
          <li>Signout</li>
        </ul>
      </>

      <div className="right-1 top-1 w-full h-full grid grid-cols-2 grid-rows-3">
        <div>Welcome USERNAME!</div>
        <div className="row-start-2">Chart for profit for the day</div>
        <div className="row-start-3">Transactions of the day</div>
        <div className="row-start-2 col-start-2">On the right Queue</div>
        <div className="row-start-3 col-start-2">
          below queue is for delivery or pickup
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
  const pudData = pud.data[0];

  return {
    props: {
      queueData: queueData,
      pudData: pudData,
    },
  };
};
