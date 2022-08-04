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

