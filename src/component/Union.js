import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Novis1 from '../picture/Union/Novis1.webp';
import Novis2 from '../picture/Union/Novis2.webp';
import Novis3 from '../picture/Union/Novis3.webp';
import Novis4 from '../picture/Union/Novis4.webp';
import Novis5 from '../picture/Union/Novis5.webp';
import Veteran1 from '../picture/Union/veteran1.webp';
import Veteran2 from '../picture/Union/veteran2.webp';
import Veteran3 from '../picture/Union/veteran3.webp';
import Veteran4 from '../picture/Union/veteran4.webp';
import Veteran5 from '../picture/Union/veteran5.webp';
import Master1 from '../picture/Union/master1.webp';
import Master2 from '../picture/Union/master2.webp';
import Master3 from '../picture/Union/master3.webp';
import Master4 from '../picture/Union/master4.webp';
import Master5 from '../picture/Union/master5.webp';
import GrandMaster1 from '../picture/Union/Grandmaster1.webp';
import GrandMaster2 from '../picture/Union/Grandmaster2.webp';
import GrandMaster3 from '../picture/Union/Grandmaster3.webp';
import GrandMaster4 from '../picture/Union/Grandmaster4.webp';
import GrandMaster5 from '../picture/Union/Grandmaster5.webp';
import Supreme1 from '../picture/Union/Supreme1.webp';
import Supreme2 from '../picture/Union/Supreme2.webp';
import Supreme3 from '../picture/Union/Supreme3.webp';
import Supreme4 from '../picture/Union/Supreme4.webp';
import Supreme5 from '../picture/Union/Supreme5.webp';

export default function Union() {
    const maple_api = process.env.REACT_APP_NEXON_OPEN_API2;

    let currentPath = window.location.pathname;
    let parts = currentPath.split('/');
    let ocid = parts[2]; //URL의 파리미터에서 ocid(식별자)를 가져옴
    
    const [data, SetData]=useState(null);
    const [unionLevel, setUnionLever]=useState(null);
    const [unionGrade, setUnionGrade]=useState(null);
    const [artifactLv, setArtifactLV]=useState(null);
    const [artifactExp, setArtifactExp]=useState(null);
    const [artifactPoint,setArtifactPoint]=useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);
    const fetchUserData = async () => {
        try {
            const getUnionData = await axios.get(`https://open.api.nexon.com/maplestory/v1/user/union?ocid=${ocid}`, {
                headers: { 'x-nxopen-api-key': maple_api },
            });
            const {union_level,union_grade,union_artifact_level,union_artifact_exp,union_artifact_point}=getUnionData.data;
            setUnionLever(union_level);
            setUnionGrade(union_grade);
            setArtifactLV(union_artifact_level);
            setArtifactExp(union_artifact_exp);
            setArtifactPoint(union_artifact_point);
            const getUnionraiderData=await axios.get(`https://open.api.nexon.com/maplestory/v1/user/union-raider?ocid=${ocid}`,{
                headers: {'x-nxopen-api-key': maple_api},
            });
        }      
        catch (error) {
        console.log(error.response);
        }   
    };

    return (
        <UnionComponent>
            <TitleText>유니온</TitleText>
            <MainContainer>
            <div>Union level : {unionLevel}</div>
            <UnionGradeImg grade={unionGrade }></UnionGradeImg>
            <div>Union Grade : {unionGrade}</div>
            <div>ArifactExp : {artifactExp}</div>
            </MainContainer>
        </UnionComponent>

    );
}
const UnionComponent=styled.div`
    display:flex;
    flex-direction:column;
    border: 2px solid #dde3e9;
    border-radius: 8px;
`;
const TitleText = styled.div`
    width: 100%;
    height: 5vh;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    line-height: 5vh;
    background-color: #eceff7;
    color: black;
    border-radius: 8px 8px 0px 0px;
    border-bottom: 2px solid #dde3e9;
    padding-left: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const MainContainer=styled.div`
    border-radius:0px 0px 8px 8px;
    padding:10px;
`;
const UnionGradeImg=styled.div`
    background-image:${props=>{
    switch(props.grade){
        case '노비스 유니온 1':
            return `url(${Novis1})`;
        case '노비스 유니온 2':
            return `url(${Novis2})`;
        case '노비스 유니온 3':
            return `url(${Novis3})`;
        case '노비스 유니온 4':
            return `url(${Novis4})`;
        case '노비스 유니온 5':
            return `url(${Novis5})`;
        case '베테랑 유니온 1':
            return `url(${Veteran1})`;
        case '베테랑 유니온 2':
            return `url(${Veteran2})`;
        case '베테랑 유니온 3':
            return `url(${Veteran3})`;
        case '베테랑 유니온 4':
            return `url(${Veteran4})`;
        case '베테랑 유니온 5':
            return `url(${Veteran5})`;
        case '마스터 유니온 1':
            return `url(${Master1})`;
        case '마스터 유니온 2':
            return `url(${Master2})`;
        case '마스터 유니온 3':
            return `url(${Master3})`;
        case '마스터 유니온 4':
            return `url(${Master4})`;
        case '마스터 유니온 5':
            return `url(${Master5})`;
        case '그랜드 마스터 유니온 1':
            return `url(${GrandMaster1})`;
        case '그랜드 마스터 유니온 2':
            return `url(${GrandMaster2})`;
        case '그랜드 마스터 유니온 3':
            return `url(${GrandMaster3})`;
        case '그랜드 마스터 유니온 4':
            return `url(${GrandMaster4})`;
        case '그랜드 마스터 유니온 5':
            return `url(${GrandMaster5})`;
        case '슈프림 유니온 1':
            return `url(${Supreme1})`;
        case '슈프림 유니온 2':
            return `url(${Supreme2})`;
        case '슈프림 유니온 3':
            return `url(${Supreme3})`;
        case '슈프림 유니온 4':
            return `url(${Supreme4})`;
        case '슈프림 유니온 5':
            return `url(${Supreme5})`;
        default:
            return "";
    }}};
    width:100px;
    height:100px;
`;