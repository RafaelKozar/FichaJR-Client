import React, { useState } from 'react';
import { Button } from '@chakra-ui/react'
import * as Yup from 'yup';
import { Formik, Form} from "formik";
import MyTextInput from '../common/MyTextInput';
import MySelectInput from '../common/MySelectInput';
import agent from '../api/agent';
import { IFicha } from '../models/ficha';
import styles from './styles.module.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import Resultado from '../resultadoCadastro/ResultadoCadastro';


export default observer(function CadastroPage() {
    const { modalStore } = useStore();
    const [initialFicha, setInitialFicha] = useState<IFicha>({
        phone: '',
        name: '',
        quantity: null
    });  


    const validacaoFicha = Yup.object({
        name: Yup.string().required("Preencha o campo nome"),
        phone: Yup.string().required("Preencha o campo celular").matches(/^[0-9]+$/, "apenas número").min(11, "Preencha o campo celular com um número valido").max(11, "Preencha o campo celular com um número valido"),
        quantity: Yup.number().positive().nullable(true).required("Selecione o número de fichas do cadastro")

    })


    const handleFormSubmit = (ficha: IFicha) => {
        const q = ficha.quantity?.toString()
        ficha.quantity = parseInt(q!)

        agent.FichaApi.createTicket(ficha).then(() => {
            modalStore.openModal(<Resultado sucesso={true} />, true);
        }).catch(r => {
            modalStore.openModal(<Resultado sucesso={false} messageError={r} />, false);
        });

    }

    return (
        <div className={styles.App}>
            <Formik
                validationSchema={validacaoFicha}
                enableReinitialize
                initialValues={initialFicha}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form onSubmit={handleSubmit} className="Form">
                        <MyTextInput placeholder="Nome" name="name" />
                        <MyTextInput placeholder="Celular" type='number' name="phone" />
                        <MySelectInput
                            placeholder='Selecione a quantidade de Fichas que a pessoa está comprando'
                            name="quantity"
                             />                        
                        <Button

                            colorScheme='teal' size='md'
                            disabled={!dirty || !isValid}

                            type='submit'>Enviar</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})