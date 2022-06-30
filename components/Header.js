import styled from 'styled-components'
import { FaBook } from 'react-icons/fa'
import Image from 'next/image'
import placeholder from '../source/placeholder.png'

function Header() {
    return (
        <Container>
            {/* logo */}
            <Logo>
                <Image
                    src={placeholder}
                    alt="logo"
                    width={50}
                    height={50}
                />
                <Name>
                    lundeen
                    cahilly
                </Name>
            </Logo>
            
            
        </Container>
    )
}

const Container = styled.div`
    background-color: black;
    width: 100vw;
    min-height: 80px;
    max-height: 10vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
`

const Logo = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

const Name = styled.div`
    width: 50px;
    font-weight: bold;
    color: white;
    text-overflow: wrap;
`

export default Header