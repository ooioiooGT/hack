import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import Navigation from "../../components/navigation";
import Banner from "../../components/topbanner";

export default function Dashboard() {
  return (
    <div>
      <Navigation body={<Banner />} />
    </div>
  );
}
