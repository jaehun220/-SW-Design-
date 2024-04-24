import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <Navbar>
                <Navi activeClassName="active" exact to="/terms">
                    서비스 이용 약관
                </Navi>
                <Divider>|</Divider>
                <Navi activeClassName="active" to="/privacy">
                    개인정보 취급 방침
                </Navi>
                <Divider>|</Divider>
                <Navi activeClassName="active" to="/contact">
                    제휴문의
                </Navi>
                <Divider>|</Divider>
                <Navi activeClassName="active" to="/support">
                    고객센터
                </Navi>
                <Divider>|</Divider>
                <Navi activeClassName="active" to="/jobs">
                    채용
                </Navi>
            </Navbar>
            <NavbarText>© All Rights Reserved. Hosted by PlayXP Inc. Maple.GG is not associated with NEXON Korea. Data based on NEXON Open API.</NavbarText>
        </Container>
    );
}

const Container = styled.div`
    background-color: rgba(33, 34, 39);
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Navbar = styled.div`
    margin: 10px;
`;
const NavbarText = styled.div`
    margin-bottom: 10px;
    word-spacing: 3px;
    font-size: 13px;
    color: white;
    margin: 10px;
    text-decoration: none;
`;
const Navi = styled(NavLink)`
    word-spacing: 3px;
    font-size: 13px;
    color: white;
    margin: 10px;
    text-decoration: none;
`;
const Divider = styled.span`
    margin: 0 2vw;
    color: white;
`;
export default Footer;
