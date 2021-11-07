/**
 * Created by mrhazzoul on 5/11/2021.
 */

import {LightningElement, wire, track} from 'lwc';
import data from '@salesforce/resourceUrl/data';
import {loadScript} from "lightning/platformResourceLoader";
import {publish, MessageContext} from "lightning/messageService";
import Movie_Selected from '@salesforce/messageChannel/Movie_Selected__c';


export default class MovieList extends LightningElement {
    @track data = [];
    filterText;
    isLoading = true;
    @track filteredData;
    @track searchValue;
    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        loadScript(this, data)
            .then(() => {
                this.data = window.loadData();
                //We use this to filter the search results
                this.filteredData = this.data
                console.log('Loaded data');
                this.isLoading = false;
            })
            .catch(error => {
                console.log('There has been an error', error);
                this.isLoading = false;
            })
    }

    renderedCallback() {
        console.log('Im being rendered again :D')
    }

    handleSelectedMovie(event) {
        const payload = {
            recordData: JSON.parse(event.detail)
        }
        publish(this.messageContext, Movie_Selected, payload)
    }

    handleSearch(event) {
        this.filterText = event.target.value;
        this.filteredData = this.data.filter(x => x.title.toLowerCase().includes(this.filterText.toLowerCase()));
    }
}