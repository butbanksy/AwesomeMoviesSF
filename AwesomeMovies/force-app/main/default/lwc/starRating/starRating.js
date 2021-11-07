/**
 * Created by mrhazzoul on 5/11/2021.
 */

import {api, LightningElement, track} from 'lwc';

export default class StarRating extends LightningElement {

    @api rating;
    @api movieName;
    @track numberOfRatedStars;
    @track numberOfUnratedStars;
    MAX_RATING = 5;
    MIN_RATING = 0

    connectedCallback() {
        console.log(this.rating);
        this.renderStarRating()
    }

    get ratedStars(){
        this.numberOfRatedStars = Array.from(Array(this.rating)).keys();
        return this.numberOfRatedStars
    }
    get unratedStars(){
        this.numberOfUnratedStars = Array.from(Array(5- this.rating)).keys();
        return this.numberOfUnratedStars;
    }

    renderStarRating(){

        if (this.rating >= this.MAX_RATING) {
            this.numberOfRatedStars = Array.from(Array(5).keys())
            this.numberOfUnratedStars = [];

            return;
        }
        if(this.rating <= this.MIN_RATING){
            this.numberOfUnratedStars = Array.from(Array(5).keys())
            this.numberOfRatedStars = [];
            return;
        }

        this.numberOfRatedStars = Array.from(Array(Math.floor(this.rating)).keys());
        this.numberOfUnratedStars = Array.from(Array(5 - Math.floor(this.rating)).keys())
    }

    get generateId(){
        let generatedId = Math.floor(Math.random() * 1000000);
        return generatedId;
    }


}