/**
 * Created by mrhazzoul on 5/11/2021.
 */

import {LightningElement, track} from 'lwc';

export default class MovieHeader extends LightningElement {
    @track openModal = false;

    showModal() {
        this.openModal = true;
    }
    closeModal() {
        this.openModal = false;
    }
    get modalStatus(){
        return this.openModal;
    }

}