import React from "react";
import Image from "next/image";
export default function DashboardPayment() {
  return (
    <div className="flex flex-col w-3/12 border-l">
      <div className="w-full border-b p-4 flex flex-col items-center">
        <label
          for="Toggle4"
          className="flex bg-slate-50 rounded-3xl p-1 w-72 mt-2"
        >
          <input id="Toggle4" type="checkbox" className="hidden peer w-full" />
          <span className=" ease-in-out delay-50 transition-all w-1/2 px-10 p-3 rounded-3xl flex justify-center items-center bg-slate-50 peer-checked:bg-white">
            Buy
          </span>
          <span className="ease-in-out delay-50 w-1/2 px-4 py-2 rounded-3xl flex justify-center items-center bg-white peer-checked:bg-slate-50">
            Reservation
          </span>
        </label>

        <div className="w-full bg-slate- flex flex-col justify-center items-center mt-6 py-3 px-5">
          <span className="font-bold mb-2">Customer Info</span>
          <form className="px-5 mt-3 w-full border rounded-3xl">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Customer Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                className="block w-full py-3 text-md text-gray-500 border-white rounded-3xl "
                placeholder="Customer Name"
                required
              />
            </div>
          </form>
          <form className="px-5 mt-3 w-full border rounded-3xl">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Customer Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                className="block w-full  py-3  text-md text-gray-500 border-white rounded-3xl "
                placeholder="Select Table"
                required
              />
              <div className="absolute inset-y-0 right-5 w-5 flex items-center pl-3 pointer-events-none cursor-pointer">
                <svg
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 18.5L9.10858 10.1414C9.18668 10.0633 9.18668 9.93668 9.10858 9.85858L0.750001 1.5"
                    stroke="#19191C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </form>
          <button className="w-full flex justify-center items-center font-bold text-orange-500 bg-orange-50 rounded-3xl py-3 mt-3">
            Add Note
          </button>
        </div>
      </div>
      <div className="mt-3 border-b ">
        <span className="p-4 font-bold">Order Detail</span>
        <div className="p-4 h-96 overflow-scroll scrollbar-thin scrollbar-thumb-orange-500 scrollbar-thumb-rounded-2xl mt-2">
          <div className="flex py-5 items-center justify-between border-b">
            <div className="flex items-center mr-3">
              <Image src="/FoodItem.png" width={200} height={50} />
            </div>
            <div className="flex flex-col justify-between w-full h-full ">
              <div className="mb-4 font-bold text-lg">Steak sapi bakar</div>
              <div className="flex items-center w-full justify-between pr-2">
                <div className="flex flex-col">
                  <p className="text-gray-400">Price</p>
                  <p className="font-bold text-orange-500">$ 25.12</p>
                </div>
                <div className="flex">
                  <span>
                    <Image src="/Minus.png" width={25} height={25} />
                  </span>
                  <span className="mx-1"> 1 </span>
                  <span>
                    <Image src="/Plus.png" width={25} height={25} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full mt-2">
        <div className="w-full border-dashed border-b pb-3">
          <div className="flex justify-between">
            <p className="text-gray-400">Sub Total</p>
            <p className=" font-bold">$ 62.13</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-400">Tax (10%)</p>
            <p className=" font-bold">$ 1.87</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-gray-400">Total</p>
          <p className=" font-bold text-orange-500">$ 64.00</p>
        </div>
        <button className="w-full flex justify-center items-center font-bold text-white bg-orange-500 rounded-3xl py-3 mt-6">
          Pay Now
        </button>
      </div>
    </div>
  );
}
