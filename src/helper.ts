import {SingleUser} from "./types/Types";

export const randomIntegers = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min

export const isAlreadyExists = (id: string, users: SingleUser[]): boolean => {

   return  users.some(user => user.id === id)
}
