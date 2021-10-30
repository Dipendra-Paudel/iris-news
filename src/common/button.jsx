import React from "react";
import { Link } from "react-router-dom";
import CircularLoader from "./CircularLoader";

export const LinkButton = ({ label, url }) => {
  return (
    <Link
      to={url}
      onClick={() => window.scrollTo(0, 0)}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
    >
      {label}
    </Link>
  );
};

export const AuthButton = ({ submitting, label }) => {
  return (
    <button
      className={`text-white flex items-center justify-center p-2 w-full font-semibold ${
        submitting
          ? "cursor-wait bg-yellow-500"
          : "bg-yellow-500 hover:bg-yellow-600"
      }`}
    >
      {submitting ? <CircularLoader /> : label}
    </button>
  );
};
