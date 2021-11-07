/**
 * Created by mrhazzoul on 4/11/2021.
 */

import {LightningElement, wire, api, track} from 'lwc';
import {subscribe, MessageContext} from "lightning/messageService";
import Movie_Selected from '@salesforce/messageChannel/Movie_Selected__c';

export default class MoviePreview extends LightningElement {
    @track movieSelected
    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    handleUpdateClick() {

    }

    handleDeleteClick() {

    }

    get movieRating() {
        return this.movieSelected ? this.movieSelected.rating : 0;
    }

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            Movie_Selected,
            (message) => this.handleMessage(message)
        )
    }

    handleMessage(message) {
        this.movieSelected = message.recordData;
    }

}