import React from "react";
import Footer from "./Footer";
import getList from "../similarMemberList";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SimilarMemberDiv, BackHeader, OrangeTextBox } from "../styledComponents";

const SimilarMember = () => {
  //   const member_list = getList();

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "rgb(159, 163, 171)" }}
        />
      </BackHeader>
      <SimilarMemberDiv>
        <p className="score600" style={{ fontSize: "100%" }}>
          당신이 찾는 팀원은 누구인가요?
        </p>
        <div className="memberBox"></div>
        <OrangeTextBox className="score600">원하는 기술 경험을 선택해주세요!</OrangeTextBox>
      </SimilarMemberDiv>
      <Footer></Footer>
    </>
  );
};

export default SimilarMember;
