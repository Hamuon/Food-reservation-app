import React from "react";
import Image from "next/image";
function MainCategory() {
  return (
    <div className=" pt-6 w-1/12 h-screen flex flex-col items-center border-r">
      <div className="flex flex-col items-center h-24 w-24 m-2 p-4 ease-in-out delay-75 transition-all hover:bg-orange-500  rounded-xl">
        <div>
          <Image src="/Coffee.png" width={40} height={25} />
        </div>
        <div className=" text-gray-500 mt-1">Coffee</div>
      </div>
      <div className="flex flex-col items-center justify-center h-24 w-24 m-2 p-4 ease-in-out delay-75 transition-all hover:bg-orange-500 rounded-xl">
        <div>
          <Image src="/Cocktail.png" width={40} height={25} />
        </div>
        <div className=" text-gray-500 mt-1">Drinks</div>
      </div>
      <div className="flex flex-col items-center h-24 w-24 m-2 p-4 ease-in-out delay-75 transition-all hover:bg-orange-500 rounded-xl">
        <div>
          <Image src="/Food.png" width={40} height={25} />
        </div>
        <div className=" text-gray-500 mt-1">Food</div>
      </div>
      <div className="flex flex-col items-center h-24 w-24 m-2 p-4 ease-in-out delay-75 transition-all hover:bg-orange-500 rounded-xl">
        <div>
          <Image src="/Appetizer.png" width={40} height={25} />
        </div>
        <div className=" text-gray-500 mt-1">Appetizer</div>
      </div>
      <div className="flex flex-col items-center h-24 w-24 m-2 p-4 ease-in-out delay-75 transition-all hover:bg-orange-500 rounded-xl">
        <div>
          <Image src="/Bread.png" width={40} height={25} />
        </div>
        <div className=" text-gray-500 mt-1">Bread</div>
      </div>
      <div className="flex flex-col items-center h-24 w-24 m-2 p-4 ease-in-out delay-75 transition-all hover:bg-orange-500 rounded-xl">
        <div>
          <Image src="/Snack.png" width={40} height={25} />
        </div>
        <div className=" text-gray-500 mt-1">Snack</div>
      </div>
    </div>
  );
}

export default MainCategory;
