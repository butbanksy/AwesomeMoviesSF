/**
 * Created by mrhazzoul on 7/11/2021.
 */

import {LightningElement, api} from 'lwc';

export default class NotFound extends LightningElement {
    @api title;
    @api message;
}