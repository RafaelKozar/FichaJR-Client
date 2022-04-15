import { useField } from 'formik';

import { Input, FormLabel } from '@chakra-ui/react'
import InputMask from "react-input-mask";
import React from 'react';

interface Props {
    placeholder: string;
    name: string;
    type?: string;
    label?: string;
    mascara?: boolean;
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name);

    // return (
    //     <Form.Field error={meta.touched && !!meta.error}>
    //         <label>{props.label}</label>
    //         <Input {...field} {...props} fluid></Input>
    //         {meta.touched && meta.error ? (
    //             <Label basic color='red'>{meta.error}</Label>
    //         ) : null}
    //     </Form.Field>
    // )

    if (props.mascara) {
        return (
            <>
                <label>{props.label}</label>
                <Input {...field} {...props}>
                      <InputMask mask='(##)####' placeholder='Celular'></InputMask> 
                </Input>
                {meta.touched && meta.error ? (
                    <FormLabel color='red'>{meta.error}</FormLabel>
                ) : null}
            </>
        )
    }
    else {
        return (
            <>
                <label>{props.label}</label>
                <Input {...field} {...props}></Input>
                {meta.touched && meta.error ? (
                    <FormLabel color='red'>{meta.error}</FormLabel>
                ) : null}
            </>
        )
    }
}