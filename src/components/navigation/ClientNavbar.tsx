'use client'

import React from 'react';
import Navbar from './Navbar';
import type { ReactNode } from 'react';

interface ClientNavbarProps {
    address: string;
    children?: ReactNode;
}


const ClientNavbar: React.FC<ClientNavbarProps> = ({address, children, ...props}) => {
    return (
        <Navbar address={address} {...props}>
            {children}
        </Navbar>
    );
};

export default ClientNavbar;