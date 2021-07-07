import { UserAddress } from "./user.address.model";

export class UserRegister {
    public firstName: string
    public lastName: string
    public email: string
    public password: string
    public phone?: string
    public address?: UserAddress
}