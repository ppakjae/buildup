import React  from "react";

import {
    BackHeader,
    DropDown,
    FindMain,
    Introducing,
    OrangeText,
    DropDownCover,

  } from "../styledComponents";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

const CreatingTeam = () => {
    return (
        <>
            <BackHeader>
                <FontAwesomeIcon icon={faArrowLeft} style={{ padding: "25px 0 0 23px", color: "" }} />
                <p className="score600"style={{ padding: "20px 23px 0 0", fontSize: "14px" }}>완료</p>
            </BackHeader>
            <FindMain>
                <p className="score600" style={{ fontSize: "100%", marginTop: "20px" }}>당신은 누구인가요?</p>
            </FindMain>
            <div style={{width:"100%"}}>
                <OrangeText className="score700">설명</OrangeText>
            </div>
            <FindMain style={{width: "100%"}}>
                <Introducing type="text" className="score500" placeholder="최대 100자 이내로 작성해주세요!"></Introducing>
            </FindMain>
            <div style={{width:"100%"}}>
                <OrangeText className="score700">모집 구분</OrangeText>
            </div>
            <FindMain style={{width: "100%"}}>
                <DropDown style={{width: "80%"}}>
                    <option value="">대외활동</option>
                    <option value="">공모전</option>
                    <option value="">사이드프로젝트</option>
                </DropDown>
            </FindMain>
            <div style={{width:"100%"}}>
                <OrangeText className="score700">모집 팀원</OrangeText>
            </div>
            <DropDownCover style={{width: "100%"}}>
                <DropDown style={{width: "20%"}}>
                    <option value="">프론트엔드</option>
                    <option value="">백엔드</option>
                    <option value="">기획</option>
                    <option value="">디자인</option>
                </DropDown>
                <p>-</p>
                <DropDown style={{width: "20%"}}>
                    <option value="">1명</option>
                    <option value="">2명</option>
                    <option value="">3명</option>
                    <option value="">4명 이상</option>
                </DropDown>
            </DropDownCover>
            <DropDownCover style={{width: "100%"}}>
                <DropDown style={{width: "20%"}}>
                    <option value="">프론트엔드</option>
                    <option value="" selected>백엔드</option>
                    <option value="">기획</option>
                    <option value="">디자인</option>
                </DropDown>
                <p>-</p>
                <DropDown style={{width: "20%"}}>
                    <option value="">1명</option>
                    <option value="">2명</option>
                    <option value="">3명</option>
                    <option value="">4명 이상</option>
                </DropDown>
            </DropDownCover>
            <div style={{width:"100%"}}>
                <OrangeText className="score700">진행 방식</OrangeText>
            </div>
            <FindMain style={{width: "100%"}}>
                <DropDown style={{width: "80%"}}>
                    <option value="">대면</option>
                    <option value="">오프라인</option>
                    <option value="">혼용</option>
                </DropDown>
            </FindMain>
            <div style={{width:"100%"}}>
                <OrangeText className="score700">진행 기간</OrangeText>
            </div>
            <DropDownCover style={{width: "100%"}}>
                <DropDown style={{width: "20%"}}>
                    <option value="">2020.07.07</option>
                </DropDown>
                <p>-</p>
                <DropDown style={{width: "20%"}}>
                    <option value="">2022.12.21</option>
                </DropDown>
            </DropDownCover>
            <Footer></Footer>
        </>
    );
};

export default CreatingTeam;