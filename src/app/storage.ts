import { Injectable, NgModule } from '@angular/core';

@Injectable()
export class Storage {
    setItem(key, value) {
        localStorage.setItem(key, value);
        return true;
    }
    removeItem(key) {
        localStorage.removeItem(key);
        return true;
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
}
