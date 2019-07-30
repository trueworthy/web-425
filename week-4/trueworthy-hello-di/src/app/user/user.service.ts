import { Injectable } from '@angular/core';
import { User } from "./user";

@Injectable()
export class UserService {
  getUser(): User {
    return new User(327, "Lea", "Trueworthy", "Reno, Nevada");
  }
}