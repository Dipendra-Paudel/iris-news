import React, { Component } from "react";
import AdSense from "react-adsense";

const GoogleAds = () => {
  return (
    <AdSense.Google
      client="ca-pub-4957341065826792"
      slot={slot}
      style={{ display: "block" }}
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />
  );
};

export default GoogleAds;
