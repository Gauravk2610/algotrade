import React from "react";
import { useRouter } from "next/router";
import {
  AiOutlineLeft as Left,
  AiOutlineSearch as Search,
  AiOutlineRead as Read,
  AiOutlinePicture as Picture,
  AiFillPlusCircle as Plus,
  AiOutlineSliders as Sliders,
  AiOutlineLineChart as LineChart,
} from "react-icons/ai";

const tabList = [
  {
    name: "Positions",
    progress: 25,
  },
  {
    name: "Entry",
    progress: 50,
  },
  {
    name: "Exit",
    progress: 75,
  },
  {
    name: "Review",
    progress: 100,
  },
];

const sid = () => {
  const router = useRouter();
  const { sid } = router.query;

  const [tab, setTab] = React.useState("Positions");
  const [progressValue, setProgressValue] = React.useState(5);

  const goBack = () => {
    router.back();
  };

  const tabHandler = (tab) => {
    switch (tab) {
      case "Positions":
        return <Positions />;
      case "Entry":
        return <Entry />;
      case "Exit":
        return <Exit />;
      case "Review":
        return <Review />;
      default:
        return null;
    }
  };

  const Entry = () => {
    const onSubmit = () => {
      setProgressValue(55);
      setTab("Exit");
    };

    return (
      <div className="flex flex-col space-y-4">
        {/* Position i would take Buy and Sell toggle button */}
        <div className="flex flex-col space-y-4">
          <div className="">
            <div className="text-lg font-semibold">Position I would take</div>
          </div>
          {/* Toggle Button Buy and Sell */}
          <div className="flex flex-row h-10 w-40 bg-red-200 rounded-lg">
            <button
              type="button"
              className="flex-1 flex flex-col items-center justify-center rounded-lg bg-blue-500 text-white"
            >
              Buy
            </button>
            <button
              type="button"
              className="flex-1 flex flex-col items-center justify-center rounded-r-lg  text-red-600"
            >
              Sell
            </button>
          </div>
        </div>
        {/* Entry Condition */}
        <div className="flex flex-col space-y-4">
          <div className="">
            <div className="text-lg font-semibold">Entry Condition</div>
          </div>
          {/* Inout box to add entry condition */}
          <div>
            <div className="flex space-x-2 border-2 bg-white border-gray-300 rounded-md max-w-xs w-full px-2 py-2">
              <Search className="text-gray-400" size={20} />
              <input
                className="outline-none w-full bg-inherit"
                type="text"
                placeholder="What would you like to add?"
              />
            </div>
          </div>
        </div>
        {/* Entry Time */}
        <div className="flex flex-col space-y-4">
          <div className="">
            <div className="text-lg font-semibold">Entry Time</div>
          </div>
          <div className="mx-2 px-5 h-16 flex items-center bg-white rounded-lg shadow-lg">
            <div className="flex w-full items-center space-x-2">
              <label className="text-sm font-semibold text-gray-600">
                Start Time
              </label>
              <input
                type={"time"}
                className="outline-none border-2 text-sm px-2 max-w-[120px] w-full border-gray-300"
                value={"00:00"}
              />
            </div>
            <div className="flex w-full items-center justify-end space-x-2">
              <label className="text-sm font-semibold text-gray-600">
                End Time
              </label>
              <input
                type={"time"}
                className="outline-none border-2 text-sm px-2 max-w-[120px] w-full border-gray-300"
                value={"00:00"}
              />
            </div>
          </div>
        </div>
        <button
          typw="button"
          onClick={onSubmit}
          className="h-10 bg-blue-500 text-white rounded-lg max-w-[160px] w-full ml-auto"
        >
          Next
        </button>
      </div>
    );
  };

  const Exit = () => {
    const onSubmit = () => {
      setProgressValue(75);
      setTab("Review");
    };

  
    return (
      <div className="flex flex-col space-y-4">
        {/* Title */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Exit Condition</div>
          <div className="space-x-2">
            <span className="text-lg font-semibold">TPSL type</span>
            <select className="px-2 py-1 border-2 border-gray-300 rounded-md outline-none cursor-pointer">
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>
        <div className="mx-2 px-5 h-16 flex items-center bg-white rounded-lg shadow-lg">
          <div className="flex w-full items-center space-x-2">
            <label className="text-sm font-semibold text-red-500">
              Stop Loss %
            </label>
            <input
              type={"number"}
              className="outline-none border-2 text-sm px-2 max-w-[120px] w-full border-gray-300 text-slate-300 rounded-md py-1"
              value={"00"}
            />
          </div>
          <div className="flex w-full items-center space-x-2">
            <label className="text-sm font-semibold text-green-500">
              Target Profit %
            </label>
            <input
              type={"number"}
              className="outline-none border-2 text-sm px-2 max-w-[120px] w-full border-gray-300 text-slate-300 rounded-md py-1"
              value={"00"}
            />
          </div>
          <div className="flex w-full items-center space-x-2">
            <label className="text-sm font-semibold text-black">
              Trading SL % (optional)
            </label>
            <input
              type={"number"}
              className="outline-none border-2 text-sm px-2 max-w-[120px] w-full border-gray-300 text-slate-300 rounded-md py-1"
              value={"00"}
            />
          </div>
        </div>
        <button
          typw="button"
          onClick={onSubmit}
          className="h-10 bg-blue-500 text-white rounded-lg max-w-[160px] w-full ml-auto"
        >
          Next
        </button>
      </div>
    );
  };

  const Positions = () => {
    const onSubmit = () => {
      setProgressValue(25);
      setTab("Entry");
    };
  
    return (
      <div className="flex flex-col space-y-4">
        {/* Title */}
        <div className="">
          <div className="text-lg font-semibold">Instruments</div>
        </div>
        {/* Add you first stock container */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <Read size={100} className="opacity-80" />
            <Picture
              size={80}
              className={"z-0 opacity-20 absolute top-1/3 left-1/2"}
            />
            <Plus
              size={40}
              className={
                "opacity-100 text-red-500 absolute -bottom-1/4 -right-1/4"
              }
            />
          </div>
          <div className="text-center font-semibold text-2xl ml-8 pt-4">
            Add your first stock{" "}
          </div>
          <button className="h-10 border-2 flex items-center justify-center border-orange-400 border-dotted text-orange-400 rounded-lg py-2 px-4 ml-8">
            Add Symbols, F&O etc.
          </button>
        </div>
        {/* Chart */}
        <Chart />
        {/* Quantity */}
        <Quantity />
        <button
          typw="button"
          onClick={onSubmit}
          className="h-10 bg-blue-500 text-white rounded-lg max-w-[160px] w-full ml-auto"
        >
          Next
        </button>
      </div>
    );
  };
  const Review = () => {
    const onSubmit = () => {
      // setTab("")
      setProgressValue(100);
    };
  
    return (
      <div className="flex flex-col space-y-4">
        {/* Title */}
        <div className="">
          <div className="text-lg font-semibold">Instruments</div>
        </div>
        {/* Add you first stock container */}
        <div className="flex flex-col w-full bg-pink-100 border-2 py-8 border-pink-600 rounded-md items-center justify-center space-y-4">
          <div className="relative">
            <Read size={100} className="opacity-80" />
            <Picture
              size={80}
              className={"z-0 opacity-20 absolute top-1/3 left-1/2"}
            />
            <Plus
              size={40}
              className={
                "opacity-100 text-red-500 absolute -bottom-1/4 -right-1/4"
              }
            />
          </div>
          <div className="text-center font-semibold text-2xl ml-8 pt-4">
            Add your first stock{" "}
          </div>
          <button className="h-10 border-2 bg-white flex items-center justify-center border-orange-600 border-dotted text-orange-600 rounded-lg py-2 px-4 ml-8">
            Add Symbols, F&O etc.
          </button>
        </div>
        {/* Chart */}
        <Chart />
        {/* Quantity */}
        <Quantity />
        <button
          typw="button"
          onClick={onSubmit}
          className="h-10 bg-blue-500 text-white rounded-lg max-w-[160px] w-full ml-auto"
        >
          Next
        </button>
      </div>
    );
  };
  

  return (
    <div className="container space-y-8">
      {/* Header */}
      <div className="flex justify-between">
        {/* left Container */}
        <div className="space-x-2 flex items-center">
          <Left onClick={goBack} className={"cursor-pointer"} size={20} />
          <div className="font-bold text-2xl">{sid}</div>
        </div>
        {/* Right Container */}
      </div>
      {/* Progress bar */}
      <ProgressBar progress={progressValue} tab={tab} setTab={setTab} />
      {tabHandler(tab)}
    </div>
  );
};

const ProgressBar = ({ progress, tab, setTab }) => {
  return (
    <div className="flex flex-row items-center relative pb-10">
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-full w-0 bg-blue-500 rounded-full transition-[width] duration-1000 ease-in-out origin-left"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* 4 dots with noumber  */}
      <div className="absolute  w-full flex flex-row items-center justify-evenly">
        {tabList?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setTab(item?.name)}
              className={`relative cursor-pointer w-8 h-8 ${
                tab == item?.name
                  ? "bg-red-300"
                  : progress < item?.progress
                  ? "bg-slate-300"
                  : "bg-blue-500"
              } flex items-center justify-center rounded-full`}
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <div
                className={`absolute -bottom-10  ${
                  tab == item?.name
                    ? "text-red-500"
                    : progress < item?.progress
                    ? "text-slate-300"
                    : "text-blue-500"
                }`}
              >
                {item?.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const Chart = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Title */}
      <div className="">
        <div className="text-lg font-semibold">Chart</div>
      </div>
      <div className="mx-2 px-5 py-4 flex items-center bg-white rounded-lg shadow-lg">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Chart Type
          </label>
          <div className="rounded-md flex bg-purple-200 w-fit">
            <button className="bg-purple-600 flex justify-center items-center w-20 h-10 rounded-md">
              <Sliders color="#ffffff" size={30} />
            </button>
            <button className="bg-purple-200 flex justify-center items-center w-20 h-10 rounded-md ">
              <LineChart className="text-purple-600" size={30} />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mx-auto space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Candle Interval
          </label>
          <div className="rounded-md flex bg-purple-200 w-fit">
            <button className="bg-purple-600 flex justify-center items-center text-white px-4 h-10 rounded-md">
              min
            </button>
            <button className="bg-purple-200 text-purple-600 flex justify-center items-center px-4 h-10 rounded-md ">
              3min
            </button>
            <button className="bg-purple-200 text-purple-600 flex justify-center items-center px-4 h-10 rounded-md ">
              5min
            </button>
            <button className="bg-purple-200 text-purple-600 flex justify-center items-center px-4 h-10 rounded-md ">
              10min
            </button>
            <button className="bg-purple-200 text-purple-600 flex justify-center items-center px-4 h-10 rounded-md ">
              1 Hour
            </button>
            <button className="bg-purple-200 text-purple-600 flex justify-center items-center px-4 h-10 rounded-md ">
              day
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Holding Type
          </label>
          <div className="rounded-md flex bg-purple-200 w-fit">
            <button className="bg-purple-600 flex justify-center items-center px-4 text-white h-10 rounded-md">
              Mis
            </button>
            <button className="bg-purple-200 text-purple-600 flex justify-center items-center px-4 h-10 rounded-md ">
              CNC/NRML
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Quantity = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Title */}
      <div className="">
        <div className="text-lg font-semibold">Quantity</div>
      </div>
      <div className="mx-2 px-5 py-4 flex items-center bg-white rounded-lg shadow-lg">
        <div className="space-y-2 w-full flex flex-col">
          <label className="text-sm font-semibold text-gray-700">
            Quantity ( in lots )
          </label>
          <input
            className="bg-purple-200 w-fit rounded-md py-1 px-2 outline-none"
            type={"number"}
            placeholder=""
          />
        </div>
        <div className="space-y-2 w-full flex flex-col">
          <label className="text-sm font-semibold text-gray-700">
            Max Allocation
          </label>
          <input
            className="bg-inherit border-2 border-slate-300 w-fit rounded-md py-1 px-2 outline-none"
            type={"number"}
            placeholder="Amount per trade"
          />
        </div>
        <div className="space-y-2 w-full flex flex-col">
          <label className="text-sm font-semibold text-gray-700">
            Max Quantity ( in lots )
          </label>
          <input
            className="bg-purple-200 w-fit rounded-md py-1 px-2 outline-none"
            type={"number"}
            placeholder="Max Quantity in lots"
          />
        </div>
        <div className="space-y-2 w-full flex flex-col">
          <label className="text-sm font-semibold text-gray-700">
            Position sizing type
          </label>
          <input
            className="bg-purple-200 w-fit rounded-md py-1 px-2 outline-none"
            type={"text"}
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};
export default sid;
