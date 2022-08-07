import styled from 'styled-components';

// 스타일 컴포넌트 이름은 대문자 시작으로해서 "사용자정의+태그이름" 이런 느낌으로 하겠습니다!

// Home 페이지
export const HomeDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

    .home_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 143px;
        }

        .dsc_wrapper {
            display: flex;
            flex-direction: column;
            align-content: center;  
            margin-top: 30px;

            h1 {
                margin: auto;
                font-size: 28px;
            }

            P {
                margin-top: 20px;
                font-size: 13px;
                text-align: center;
                line-height: 20px;
            }
        }
    }
`
// 메인으로 사용할 버튼
export const MainButton = styled.button`
    // 폰트 사이즈는 정의 하실때 속성값으로 정하는 걸로 했어요!
    font-size: ${(props) => props.fontSize};
    padding: 10px 31px;
    border: 2px solid #ee793f;
    border-radius: 40px;
    background-color: white;
    /* box-shadow: 0 3px 0 #a5532f;

    :active {
        transform: translateY(3px);
        box-shadow: none;
    } */
`

// 상단바
export const Header = styled.div`
    margin-top: 20px!important;
    width: 100%;
    height: auto !important;
`

export const HeaderTop = styled.div`
    display: flex;
    position: relative;
    
    .headerlog {
        max-width: 100%;
        width:13%;
        height: auto;
        margin 0 auto;
    }
`

export const HeaderRightDiv = styled.div`
    position : absolute;
    margin-top: 6px;
    right: 7%;
    display: flex;
`

export const HeaderRightIcon = styled.button`
    border: none;
    color: #A6A6A6;
    font-size: 140%;
    background-color: transparent;
    margin-left:16px;
`

export const HeaderTextBox = styled.ul`
    display:flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0 23px 0 23px;
    margin-top: 20px;
    color: #868687;
    font-size: 95%;
    border-bottom: 1px solid #D0CECE;

    .lifirst {
        color: black;
        border-bottom: 3px solid #EE793F;
        padding-bottom: 9px;
    }
`

export const Asd = styled.div`
    // flex: 1;
`


export const Footer = styled.div`
    list-style-type: none;
    height: 61px !important;
    display : flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid black;


    .userimgcover {
        width: 30%;
        height: 70%; 
        border-radius: 70%;
        overflow: hidden;
    }

    .userimg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`