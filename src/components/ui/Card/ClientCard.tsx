'use client'

import React from 'react';
import Card from './Card';
import type { HTMLAttributes } from 'react';

interface ClientCardProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    children?: React.ReactNode;
    onClick?: () => void;
}


const ClientCard: React.FC<ClientCardProps> = ({...props}) => {
    return (
        <Card {...props}/>
    )
}

export default ClientCard