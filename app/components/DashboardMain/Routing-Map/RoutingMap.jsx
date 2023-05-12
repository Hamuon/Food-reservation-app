import React from "react";

export default function RoutingMap() {
  return (
    <div className="flex px-4 py-3 border-b">
      <div className="flex items-center ml-1">
        <div className=" font-bold text-orange-500">Dashboard</div>
      </div>
      <span className="ml-1">/</span>
      <div className="flex items-center ml-1">
        <div className=" text-gray-500">Food</div>
      </div>
    </div>
  );
}
