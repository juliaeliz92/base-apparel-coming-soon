import { Heading } from '@chakra-ui/react'
import React, { ReactNode } from 'react';

interface HeadingProp {
    children: ReactNode,
    sx: object
}

const MyHeading: React.FC<HeadingProp> = ({ children, sx }) => {
    return <Heading
        as='h1'
        size='4xl'
        sx={{ textTransform: 'uppercase', paddingBottom:'2px', ...sx }}
    >
        {children}
    </Heading>
}

export default MyHeading;