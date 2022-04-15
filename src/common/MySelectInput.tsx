import { useField } from 'formik';
import { Select, FormLabel as Label } from '@chakra-ui/react'
import React from 'react';

interface Props {
    placeholder : string;
    name: string;    
    label?: string;
}

export default function MySelectInput(props: Props){
    const [field, meta] = useField(props.name);
    var valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    

    return (
        <>
            <label>{props.label}</label>
            
            <Select {...field} {...props} placeholder={props.placeholder}>
                {valores.map((v, index) => 
                    <option key={index} value={v}>{v}</option>
                )}
            </Select>
            {meta.touched && meta.error ? (
                <Label color='red'>{meta.error}</Label>
            ) : null}
        </>
    )
}