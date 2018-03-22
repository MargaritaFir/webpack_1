import moment from 'moment';
import {internet} from 'faker';

let h =document.body.appendChild(document.createElement('h4'));
h.setAttribute('title', 'MargaritaFir');
h.setAttribute('id', 'author');


let el =document.body.appendChild(document.createElement('pre'));
el.textContent += moment().format + internet.email() + '\n';
p.textContent += 'MargaritaFir';