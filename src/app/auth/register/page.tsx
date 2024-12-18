"use client"
import Link from "next/link"
import { sendRequest } from "@/library/api"
import { useState } from "react"
import { register } from "@/utils/action"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

const RegisterPage = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")
    const router = useRouter()

    const registerAction = async (e: any) => {
        e.preventDefault()
        const res = await register(email, password, name);

        if (res?.data) {
            router.push(`/auth/verify/${res?.data._id}`)
        } else {
            toast.error(res.message)
        }
    }

    return (
        <div className="py-4 min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                            className="w-32 mx-auto" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Register
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="my-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Register with e-mail
                                </div>
                            </div>

                            <form className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                <input
                                    className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4"
                                    type="text" placeholder="Username" autoComplete="username" onChange={(e) => setName(e.target.value)} />
                                <input
                                    className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4"
                                    type="password" placeholder="Password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
                                <button className="mt-4 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center"
                                    onClick={(e) => registerAction(e)}
                                >
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        Register
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by templatana's
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                                <p className="mt-2 text-xs text-gray-600 text-center">
                                    Already have an account?
                                    <Link href="/auth/login" className="border-b border-gray-500 border-dotted">
                                        Login
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage