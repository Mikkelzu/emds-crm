/**
 * This is the user object model to be used in all cases outside of Login/Register
 */

import { UserAddress } from "./user.address.model";

export class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public address: UserAddress;
    public email: string;
}