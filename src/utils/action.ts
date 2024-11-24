"use server"

import { signIn, signOut } from "@/auth"
import { sendRequest } from "@/library/api"

export const authenticate: any = async (email: string, password: string) => {
    try {
        return await signIn("credentials", { email, password, redirect: false })
    } catch (error: any) {
        if (error.name === "InvalidEmailPasswordError") {
            return { error: error.type, code: 1 }
        } else if (error.name === "InactiveAccountError") {
            return { error: error.type, code: 2 }
        } else {
            return { error: "??????????", code: 0 }
        }
    }
}

export const logout = async () => {
    await signOut()
}

export const register: any = async (email: string, password: string, name: string) => {
    try {
        return await sendRequest<IBackendRes<any>>({
            url: `${process.env.API_URL}/auth/register`,
            method: "POST",
            body: {
                email, password, name,
            }
        })
    } catch (error: any) {
        return { message: error }
    }
}

export const verify: any = async (id: string, code: string) => {
    try {
        return await sendRequest<IBackendRes<any>>({
            url: `${process.env.API_URL}/auth/verify`,
            method: "POST",
            body: {
                id, code
            }
        })
    } catch (error: any) {
        return { message: error }
    }
}
