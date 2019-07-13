/*
============================================
; Title:  trueworthy-assigment-1.4.ts
; Author: Professor Krasso
; Modified by: Lea Trueworthy
; Date:   13 July 2019
; Description: Demonstrates how to create functions and variables in TypeScript
;===========================================
*/

let firstName: string = 'Lea';
let lastName: string = 'Trueworthy';
function myName(firstName: string, lastName: string): string {
    return 'Hello my name is ' + firstName + ' ' + lastName;
};

console.log(myName(firstName, lastName));