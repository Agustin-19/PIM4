import { UserClass } from "./user.interface";

export interface LoginFormData {
    email: string;
    password: string;
}

export interface LoginErrors {
    email?: string;
    password?: string;
}

export interface LoginResponse {
    token: string;
    user: UserClass | null;
    message?: string;
}


export interface RegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: string;
}

export interface RegisterErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    address?: string;
    phone?: string;
}