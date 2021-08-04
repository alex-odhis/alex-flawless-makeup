import { trigger, transition, animate, style, state } from '@angular/animations';

export let fade = trigger('fade', [

                    state('void', style({ opacity: 1 })),

    transition(':enter', [
                        animate(2000, style({ transform: 'rotateY(360deg)'}))
                        ])
                ])