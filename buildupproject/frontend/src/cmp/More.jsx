import React from "react";
import Footer from "./Footer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackHeader } from "../styledComponents";

import { useNavigate } from "react-router-dom";


const More = () => {

  const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
      };

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon onClick={goBack}
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "rgb(159, 163, 171)" }}
        />
      </BackHeader>
      <div className="profileBox"></div>
      <Footer></Footer>
    </>
  );
};

export default More;
