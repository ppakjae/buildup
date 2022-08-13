import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
    BackHeader,
    FindMain,
    MemberBoxCover,
    MemberBox,
    OrangeTextBox,
    MainButton,
} from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Find_member = () => {
  return (
    <>
      <BackHeader>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "" }}
        />
      </BackHeader>
      <FindMain>
        <p className="score600" style={{ fontSize: "100%" }}>당신이 찾는 팀원은 누구인가요?</p>
        <OrangeTextBox className="score600">
            당신이 찾는 팀원의 분야를 선택해주세요!
        </OrangeTextBox>
        <MemberBoxCover>
            <MemberBox>
                <img src="/img/members/product_planner.png" alt="product_planner.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">기획자</p>
            </MemberBox>
            <MemberBox>
                <img src="/img/members/developer.png" alt="product_planner.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">개발자</p>
            </MemberBox>
        </MemberBoxCover>
        <MemberBoxCover>
            <MemberBox>
                <img src="/img/members/designer.png" alt="product_planner.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">디자이너</p>
            </MemberBox>
            <MemberBox>
                <img src="/img/members/maketer.png" alt="product_planner.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">마케터</p>
            </MemberBox>
        </MemberBoxCover>
        <MainButton className="score600" style={{ padding: "1px 25px", fontSize: "15px"}}>
                다음
        </MainButton>
      </FindMain>
    </>
  );
};

export default Find_member;
