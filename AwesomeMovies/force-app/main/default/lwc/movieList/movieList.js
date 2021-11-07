/**
 * Created by mrhazzoul on 5/11/2021.
 */

import {LightningElement, wire} from 'lwc';
import data from '@salesforce/resourceUrl/data';
import {loadScript} from "lightning/platformResourceLoader";
import {publish, MessageContext} from "lightning/messageService";
import Movie_Selected from '@salesforce/messageChannel/Movie_Selected__c';


export default class MovieList extends LightningElement {
    data = [];
    isLoading = true;
    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        loadScript(this, data)
            .then(() => {
                this.data = window.loadData();
                console.log('Loaded data');
                this.isLoading = false;
            })
            .catch(error => {
                console.log('There has been an error', error);
                this.isLoading = false;
            })
    }

    handleSelectedMovie(event){
        const payload = {
            recordData : JSON.parse(event.detail)
        }
        publish(this.messageContext, Movie_Selected, payload)
    }
}