import { Image, Flex } from '@chakra-ui/react'
import React from 'react';

interface LogoProp {
    display: object
}

const Logo: React.FC<LogoProp> = ({display}) => {
    return <Flex 
        display={display} 
        alignSelf={{base: 'flex-start', xl: 'inherit'}}
        pl={{base: '50px', xl: '0'}}
    >
        <Image src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt='logo' />
    </Flex>
}

export default Logo;