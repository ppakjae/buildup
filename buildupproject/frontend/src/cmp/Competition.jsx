import React  from "react";

import { 
    CompetitionSearch,
    FindMain,
    BackHeader,
    MemberBoxCover,
    MainBottom,

 } from "../styledComponents";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "./Footer";

const Competition = () => {
    return (
        <>
            <BackHeader>
                <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ padding: "25px 0 0 23px", color: "" }}
                />
            </BackHeader>
            <FindMain style={{width: "100%"}}>
                <CompetitionSearch placeholder="공모전 이름을 검색하십시오."/>
                <MemberBoxCover>
                    <p>#개발자</p>
                    <p>#디자이너</p>
                    <p>#기획자</p>
                    <p>#마케터</p>
                    <p>#웹</p>
                    <p>#앱</p>
                    <p>#게임</p>
                </MemberBoxCover>
                <BackHeader>
                    <p>&gt;2022 공모전</p>
                </BackHeader>

                <MainBottom>
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster1.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster2.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster3.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster4.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster5.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster6.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster7.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster8.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster9.png"
                        alt="poster.png"
                    />
                </MainBottom>

            </FindMain>
            <Footer />

        </>
    );
};

export default Competition;