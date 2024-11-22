"use server"

import { signIn, signOut } from "@/auth"

export const authenticate = async (email: string, password: string) => {
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