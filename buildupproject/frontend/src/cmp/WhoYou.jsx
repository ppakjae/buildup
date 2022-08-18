import React, { useState } from "react";

import {
    BackHeader, 
    FindMain,
    FooterBtn,
    OrangeTextBox,
    ConditionBtn,
    MemberBoxCover,
    TechInput,
    UploadFile,

  } from "../styledComponents";

import { faArrowLeft, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhoYou = () => {

    const [checkbox1, setCheckbox1] = useState(true);
    const [checkbox2, setCheckbox2] = useState(true);
    const [checkbox3, setCheckbox3] = useState(true);
    const [checkbox4, setCheckbox4] = useState(true);
    const [checkbox5, setCheckbox5] = useState(true);

    const toggleCheckbox1 = () => {
        setCheckbox1((checkbox1) => !checkbox1);
    }; 
    const toggleCheckbox2 = () => {
        setCheckbox2((checkbox2) => !checkbox2);
    }; 
    const toggleCheckbox3 = () => {
        setCheckbox3((checkbox3) => !checkbox3);
    }; 
    const toggleCheckbox4 = () => {
        setCheckbox4((checkbox4) => !checkbox4);
    }; 
    const toggleCheckbox5 = () => {
        setCheckbox5((checkbox5) => !checkbox5);
    }; 

    return (
        <>
            <BackHeader style={{ height: "auto", magin: "0 0"}}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ padding: "25px 0 0 23px", color: "" }} />
                <p className="score600"style={{ padding: "20px 23px 0 0", fontSize: "14px" }}>완료</p>
            </BackHeader>
            <FindMain className="userimgcover" style={{ height: "auto" }}>
                <p className="score600" style={{ fontSize: "100%", marginTop: "20px" }}>당신은 누구인가요?</p>
                <FooterBtn className="userimgcover">
                    <img src="/img/user.png" className="userimg" alt="user.png" />
                </FooterBtn>
                <p className="score400">최지은 23세 한양대ERICA</p>
                <OrangeTextBox className="score600" style={{ marginTop: "40px" }}>
                    전문 분야를 선택해주세요!
                </OrangeTextBox>
                <MemberBoxCover>
                    <ConditionBtn type="button" style={{ margin: "0 5px" }} onClick={toggleCheckbox1}>
                        <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
                        REACT
                        </p>
                        {checkbox1 ? (
                            <FontAwesomeIcon icon={faSquare} />
                            ) : (
                            <FontAwesomeIcon icon={faSquareCheck} />
                            )}
                    
                    </ConditionBtn>
                    <ConditionBtn type="button" style={{ margin: "0 5px" }} onClick={toggleCheckbox2}>
                        <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
                        REACT
                        </p>
                        {checkbox2 ? (
                            <FontAwesomeIcon icon={faSquare} />
                            ) : (
                            <FontAwesomeIcon icon={faSquareCheck} />
                            )}
                        
                    </ConditionBtn>
                    <ConditionBtn type="button" style={{ margin: "0 5px" }} onClick={toggleCheckbox3}>
                        <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
                        REACT
                        </p>
                        {checkbox3 ? (
                            <FontAwesomeIcon icon={faSquare} />
                            ) : (
                            <FontAwesomeIcon icon={faSquareCheck} />
                            )}
                        
                    </ConditionBtn>
                </MemberBoxCover>
                <MemberBoxCover>
                    <ConditionBtn type="button" style={{ margin: "0 5px" }} onClick={toggleCheckbox4}>
                        <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
                        REACT
                        </p>
                        {checkbox4 ? (
                            <FontAwesomeIcon icon={faSquare} />
                            ) : (
                            <FontAwesomeIcon icon={faSquareCheck} />
                            )}
                        
                    </ConditionBtn>
                    <ConditionBtn type="button" style={{ margin: "0 5px" }} onClick={toggleCheckbox5}>
                        <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
                        REACT
                        </p>
                        {checkbox5 ? (
                            <FontAwesomeIcon icon={faSquare} />
                            ) : (
                            <FontAwesomeIcon icon={faSquareCheck} />
                            )}
                        
                    </ConditionBtn>
                </MemberBoxCover>
                <OrangeTextBox className="score600" style={{ marginTop: "40px" }}>
                    보유 기술 및 경력을 자유롭게 작성하세요!
                </OrangeTextBox>
                <TechInput type="text"/>
                <div style={{width: "100px"}}>
                    <UploadFile type="button">
                        <p className="score600">파일첨부</p>
                        <p className="score600">+</p>
                    </UploadFile>
                </div>
            </FindMain>
            
            
            
                
                
        </>
    );
}

export default WhoYou;
