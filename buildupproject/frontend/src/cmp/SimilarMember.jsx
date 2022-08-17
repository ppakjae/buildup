import React from "react";
import Footer from "./Footer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SimilarMemberDiv, BackHeader, OrangeTextBox } from "../styledComponents";
import { useNavigate } from "react-router-dom";

const SimilarMember = () => {
  const navigate = useNavigate();
  const goMore = () => {
    navigate("/more");
  };

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "rgb(159, 163, 171)" }}
        />
      </BackHeader>
      <SimilarMemberDiv className="box">
        <p className="score600" style={{ fontSize: "100%" }}>
          당신이 찾는 팀원은 누구인가요?
        </p>
        <OrangeTextBox className="score600">팀원의 스펙을 살펴보세요!</OrangeTextBox>
        <div className="memberBox">
          <div className="member">
            <img src="/img/profile/wjddn.png" alt="wotjs" />
            <p className="score500 nameBox">
              장정우
              <p className="score300">님</p>
            </p>
            <button onClick={goMore} type="button" className="more score400">
              더보기
            </button>
          </div>
          <div className="member">
            <img src="/img/profile/wjddn.png" alt="wotjs" />
            <p className="score500 nameBox">
              장정우
              <p className="score300">님</p>
            </p>
            <button onClick={goMore} type="button" className="more score400">
              더보기
            </button>
          </div>
        </div>
      </SimilarMemberDiv>
      <Footer></Footer>
    </>
  );
};

export default SimilarMember;
