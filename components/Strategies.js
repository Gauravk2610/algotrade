import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlinePlus as Plus } from "react-icons/ai";
import { AiOutlineLeft as Left } from "react-icons/ai";
import { AiOutlineRight as Right } from "react-icons/ai";
import { AiOutlineRise as Rise } from "react-icons/ai";
import Modal from "./Modal/Modal,";

const Strategies = () => {
  const scrollRef = useRef(null);
  const [showCreateStrategyModal, setShowCreateStrategyModal] = useState(false);

  const onRight = () => {
    scrollRef.current.scroll({
      left: scrollRef.current.scrollLeft + 300,
      behavior: "smooth",
    });
  };

  const onLeft = () => {
    scrollRef.current.scroll({
      left: scrollRef.current.scrollLeft - 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-y-6">
      {/* title */}
      <h1 className=" font-bold text-3xl">Strategies</h1>
      {/* My Strategies */}
      <div className="flex flex-col">
        <h2 className="font-bold text-xl">My Strategies</h2>
        {/* List all strategies */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex flex-row gap-x-8 py-8 px-8 overscroll-contain overflow-x-hidden whitespace-nowrap scrollbar-hide "
          >
            {/* Left Arrow */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center w-16 justify-center">
              <div
                onClick={onLeft}
                className="w-12 mx-auto flex items-center justify-center h-10 shadow-md z-10 transition-opacity duration-150 cursor-pointer bg-white"
              >
                <Left className="text-blue-500" size={25} />
              </div>
            </div>
            <CreateStrategies setShow={setShowCreateStrategyModal} />
            {[...Array(6)]?.map((_, index) => (
              <Link href={`/strategy/Test1`} key={index}>
                <Strategy key={index} />
              </Link>
            ))}
            {/* Right Arrow */}
            <div className="absolute right-0 lg:-right-8 top-0 bottom-0 flex items-center w-16 justify-center">
              <div
                onClick={onRight}
                className="w-12 mx-auto flex items-center justify-center h-12 shadow-md z-10 transition-opacity duration-150 cursor-pointer bg-white"
              >
                <Right className="text-blue-500" size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Discover Strategies */}
      <DiscoverStrategies />
      {/* Create Strategy Modal */}
      <CreateStrategyModal showModal={showCreateStrategyModal} setShowModal={setShowCreateStrategyModal} />
    </div>
  );
};

const CreateStrategies = ({setShow}) => {

  const createNewStrategy = () => {
    setShow(true);
  }
  return (
    <div onClick={createNewStrategy} className="strategies__container text-orange-400 border-2 border-dotted border-orange-400 flex flex-col items-center justify-center">
      <Plus size={30} />
      <div className="text-2xl font-semibold">Create</div>
      <div>New Strategy</div>
    </div>
  );
};

const Strategy = () => {
  return (
    <div className="strategies__container shadow-xl flex flex-col  hover:scale-95 transition-transform duration-150 ease-linear">
      {/* Strategy Name */}
      <div className="text-lg font-bold">Test 1</div>
      {/* Date of Creation & Updation */}
      <div className="text-sm text-slate-400">28 Sep 2022</div>
      {/* Startegy Details */}
      <div className="h-full flex flex-col justify-center items-center">
        No backend Test data
      </div>
    </div>
  );
};

const CreateStrategyModal = ({showModal, setShowModal}) => {

  const onCancel = () => {
    setShowModal(false)
  }

  return <Modal isVisible={showModal}>
    <div className="flex flex-col gap-y-4 py-2">
      <div className="text-xl font-bold text-center">Create New Strategy</div>
      <form onSubmit={''}>
        <div className="flex flex-col gap-y-4 max-w-xs w-full mx-auto">
          <input type="text" placeholder="Strategy Name" className="border-2 border-blue-600 focus:border-blue-600 outline-none p-2 my-2 rounded-md" />
          {/* create button */}
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">Create</button>
          {/* cancel button */}
          <button onClick={onCancel} type="button" className="text-blue-600 p-2 rounded-md font-semibold">Cancel</button>
        </div>
      </form>
    </div>
  </Modal>;
};

const DiscoverStrategies = () => {
  return (
      <div className="flex flex-col gap-y-6">
        <div className="space-y-2">
          <h2 className="font-bold text-xl">Discover Strategies</h2>
          <div className="text-sm text-slate-400">Explore by Category</div>
        </div>
        {/* List of Category */}
        <div className="flex flex-row gap-4 flex-wrap">
          {[...Array(6)]?.map((_, index) => (
            <Category key={index} />
          ))}
        </div>
      </div> 
    )
}

const Category = () => {
  return (
    <div className="max-w-[160px] h-52 px-4 py-2 rounded-lg cursor-pointer bg-purple-300 hover:scale-95 transition-transform duration-150 ease-linear flex flex-col justify-between">
      {/* Icon */}
      <Rise className="text-purple-800 mt-4" size={40} />
      <div className="text-purple-600">Make the trend your friend.</div>
      <div>Trend Following</div>
    </div>
  )
}

export default Strategies;
