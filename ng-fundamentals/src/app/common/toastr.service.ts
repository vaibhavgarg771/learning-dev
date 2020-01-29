import { InjectionToken } from '@angular/core'


export let TOASTR_TOKEN = new InjectionToken<any>('toastr');

export interface Toastr{

    success( message: string, title?: string): void;
    info( message: string, title?:string): void;
    waring(message:string, title?:string): void; 
    error(message:string, title?:string): void;
}