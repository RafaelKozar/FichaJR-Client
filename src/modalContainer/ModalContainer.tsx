import { observer } from "mobx-react-lite"

import {
    Modal,
    ModalOverlay,    
    ModalHeader,
    ModalFooter,
    ModalBody,    
    Button,
    useDisclosure
} from '@chakra-ui/react'

import { useStore } from "../stores/store";
import { useEffect } from "react";


export default observer(function ModalContainer() {
    const { modalStore } = useStore();
    // const {onOpen, isOpen } = useDisclosure()

    // useEffect(() => {        
    //     onOpen();
    // }, [])

    
    return (
        <Modal isOpen={modalStore.modal.open} onClose={modalStore.closeModal} size='lg'>
            {/* <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            /> */}
            <ModalHeader>
                {modalStore.sucesso ? "Cadastro Realizado com sucesso" : "Ops, aconteceu algum problema"}
            </ModalHeader>
            <ModalBody>
                {modalStore.modal.body}
            </ModalBody>
            <ModalFooter>
                <Button onClick={modalStore.closeModal}>OK</Button>
            </ModalFooter>
        </Modal>
    )
})