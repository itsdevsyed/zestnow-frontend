'use client';

import React from 'react';
import {Button, ButtonProps} from './Button';


interface ClientButtonProps extends Omit<ButtonProps, 'onClick'> {
    onClick?: () => void
}


const ClientButton: React.FC<ClientButtonProps> = ({...props}) => {

    const handleClick = () => {
        console.log('clicked')
    }
  return <Button {...props} onClick={handleClick}/>;
}

export default ClientButton