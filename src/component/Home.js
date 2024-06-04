import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './font.css';
import mushroomImage from '../picture/Orange_Mushroom.png'; // 이미지 불러오기
import bgImg1 from '../picture/Elluel.png';
import bgImg2 from '../picture/Ellev.png';
import bgImg3 from '../picture/Arcana.png';
import mapleLink from '../picture/MapleHomePage.jpg';
import invenLink from '../picture/Inven.png';
import ggLink from '../picture/Maplegg.png';
import Gogo from '../picture/Maple.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    return (
        <MainContainer>
            <TitleContainer href="/">
                <TitleImage src={mushroomImage} alt="Orange Mushroom" />
                <TitleText>maple.GG</TitleText>
            </TitleContainer>
            <SearchCharacter />
        </MainContainer>
    );
}

function SearchCharacter() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault(); // form의 기본 이벤트인 페이지 리로드를 막습니다.
        const maple_api = process.env.REACT_APP_NEXON_OPEN_API2;
        fetch(`https://open.api.nexon.com/maplestory/v1/id?character_name=${encodeURIComponent(searchTerm)}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-nxopen-api-key': maple_api,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ocid) {
                    navigate(`/u/${data.ocid}`);
                } else {
                    alert('존재하지 않는 캐릭터 이름입니다');
                }
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <HomeContainer>
            <SearchContainer onSubmit={handleSearch}>
                <SearchBar type="text" placeholder="캐릭터명을 입력하세요" value={searchTerm} onChange={handleChange} />
                <SearchImage src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" alt="Search" onClick={handleSearch} />
            </SearchContainer>

            <LinkContainer>
                <LinkBox href="https://maplestory.nexon.com/Home/Main" target="_blank" rel="noreferrer">
                    <LinkImg src={mapleLink} hoverSrc={Gogo}></LinkImg>
                    <LinkText>메이플스토리 홈페이지</LinkText>
                </LinkBox>
                <LinkBox href="https://maple.inven.co.kr/" target="_blank" rel="noreferrer">
                    <LinkImg src={invenLink} hoverSrc={Gogo}></LinkImg>
                    <LinkText>메이플 인벤</LinkText>
                </LinkBox>
                <LinkBox href="https://maple.gg/" target="_blank" rel="noreferrer">
                    <LinkImg src={ggLink} hoverSrc={Gogo}></LinkImg>
                    <LinkText>메이플GG</LinkText>
                </LinkBox>
            </LinkContainer>
        </HomeContainer>
    );
}

const backgroundArr = [bgImg1, bgImg2, bgImg3];
const randomIndex = Math.floor(Math.random() * backgroundArr.length);
const backgroundImage = backgroundArr[randomIndex];

const MainContainer = styled.div`
    padding-top: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 100%;
`;

const TitleContainer = styled.a`
    padding: 80px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
`;

const TitleText = styled.div`
    color: black;
    font-size: 50px;
    font-family: Maplestory Bold;
    margin-left: 10px;
`;

const TitleImage = styled.img`
    width: 50px;
    height: 50px;
`;
const HomeContainer = styled.div`
    width: 100%;
    height: auto;
`;

const SearchContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    padding: 10px;
`;

const SearchBar = styled.input`
    width: 100%;
    max-width: 20%;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 16px;
    font-family: Cafe24SsurroundAir;
`;

const SearchImage = styled.img`
    position: relative;
    width: 20px;
    height: 20px;
    right: 30px;
    margin: 0;
    cursor: pointer;
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
`;

const LinkBox = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`;

const LinkImg = styled.div`
    width: 150px;
    height: 150px;
    margin-left: 5vw;
    margin-right: 5vw;
    border-radius: 50%;
    background-image: url(${(props) => props.src});
    background-size: cover;
    transition: background-image 0.5s;
    background-repeat: no-repeat;
    &:hover {
        background-image: url(${(props) => props.hoverSrc});
    }
`;

const LinkText = styled.div`
    margin-top: 1vh;
    font-size: 15px;
    text-align: center;
    font-family: Maplestory Bold;
    color: black;
`;
