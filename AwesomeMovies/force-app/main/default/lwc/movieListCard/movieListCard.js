/**
 * Created by mrhazzoul on 5/11/2021.
 */

import {api, LightningElement} from 'lwc';

export default class MovieListCard extends LightningElement {
    @api movie;


    selectMovie(event){
        const movie = JSON.stringify(this.movie);
        event.preventDefault();
        const selectedEvent = new CustomEvent('selectedmovie',{ detail: movie})
        this.dispatchEvent(selectedEvent);
    }
}