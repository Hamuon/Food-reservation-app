import React from "react";
import RoutingMap from "./Routing-Map/RoutingMap";
import SearchFiler from "./Search-Filter.jsx/SearchFilter";
import ItemsCenter from "./ItemsCenter/ItemsCenter";

export default function DashboardMain() {
  return (
    <div className=" w-8/12">
      <RoutingMap />
      <SearchFiler />
      <ItemsCenter />
    </div>
  );
}
