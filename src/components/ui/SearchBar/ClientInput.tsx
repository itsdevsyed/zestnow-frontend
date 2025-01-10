'use client'

import React from 'react'
import { Input } from './Input'
import type { ChangeEvent, HTMLAttributes } from 'react';

// Define ClientInputProps with explicit types
interface ClientInputProps
    extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'placeholder'> {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
     placeholder?: string;
     type?: React.HTMLProps<HTMLInputElement>['type']
}


const ClientInput: React.FC<ClientInputProps> = ({onChange, ...props}) => {
    return (
        <Input {...props}  onChange={onChange}/>
    )
}

export default ClientInput