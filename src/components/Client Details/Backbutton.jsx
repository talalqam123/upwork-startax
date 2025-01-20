import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ link }) => {  // Fixed: Destructure link prop properly
  const navigate = useNavigate();  // Fixed: Move hook inside component
  
  return (
    <button
      type="button"
      onClick={() => navigate(link)}
      className="Back_button btn btn-block bg-gradient-warning btn-flat w-auto text-white mt-0 mb-0 ml-4 h-100"
    >
      Back
    </button>
  );
};

export default BackButton;