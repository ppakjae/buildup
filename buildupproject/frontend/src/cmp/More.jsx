import React from "react";
import Footer from "./Footer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoreDiv, BackHeader, OrangeTextBox, MainButton } from "../styledComponents";
import { sendData } from "./SimilarMember";

const More = () => {
  const asd = sendData();
  console.log(asd);

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "rgb(159, 163, 171)" }}
        />
      </BackHeader>
      <MoreDiv>
        <div className="titleBox">
          <p className="score600 fc">당신이 찾는 팀원!</p>
          <p className="left score400">"장정우"</p>
          <p className="left score600 fc">님</p>
        </div>
        <img src="/img/profile/장정우.png" alt="" />
        <div className="textBox">
          <p className="score400">기술 스택: react</p>
          <p className="score400">프로젝트 경험: 1년 개발</p>
          <p className="score400">진행방식: 온라인/병행</p>
        </div>
        <OrangeTextBox
          className="score600"
          style={{ fontSize: "14px", marginTop: "50px", padding: "3px 40px" }}
        >
          정우님의 프로젝트 상세보기
        </OrangeTextBox>
        <MainButton className="score600" type="button" style={{ padding: "5vpx 20px", marginTop: "30px" }}>
          팀 빌딩 'GO'
        </MainButton>
      </MoreDiv>
      <Footer></Footer>
    </>
  );
};

export default More;

// {
//   /* <button
//                 className="btn-delete"
//                 onClick={() => {
//                   axios.delete(`http://127.0.0.1:8000/api/member/${e.id}`);
//                   setText(text.filter((text) => text.id !== e.id));
//                 }}
//               ></button> */
// }
