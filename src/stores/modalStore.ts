import { makeAutoObservable } from "mobx"

interface Modal {
    open : boolean;
    body: JSX.Element | null;
}
// const {onOpen} = useDisclosure();

export default class ModalStore {
    modal : Modal = {
        open: false,
        body: null,
        
    }

    sucesso : boolean = false;

    constructor() {
        makeAutoObservable(this);
        
    }

    openModal = (content : JSX.Element, comsucesso: boolean) => {
        this.modal.open = true;        
        this.modal.body = content;
        this.sucesso = comsucesso;
    }

    closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
        window.location.reload();
    }
}