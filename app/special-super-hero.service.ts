import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero'

@Injectable()
export class HeroService {
    getHeroes(){
        return Promise.resolve(HEROES);
    }

    getHeroesSlow(){
        return new Promise<Hero[]>(resolve => 
            setTimeout(() => resolve(HEROES), 2000)
        );
    }
} 