/**
 * Created by mrhazzoul on 5/11/2021.
 */

import {LightningElement, track} from 'lwc';
import data from '@salesforce/resourceUrl/data';
import {loadScript} from "lightning/platformResourceLoader";


export default class MovieList extends LightningElement {
    data = [];
    isLoading = true;

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
}