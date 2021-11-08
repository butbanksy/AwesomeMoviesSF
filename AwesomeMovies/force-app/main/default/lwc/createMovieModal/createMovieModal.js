/**
 * Created by mrhazzoul on 8/11/2021.
 */

import {LightningElement, api} from 'lwc';

export default class CreateMovieModal extends LightningElement {
    @api openModal;
    @api closeModal;

    handleCloseModal(){
        this.dispatchEvent(new CustomEvent('closemodal'))
    }

}