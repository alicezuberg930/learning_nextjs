"use client"

import { verify } from "@/utils/action"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

const VerifyPage = ({ params }: { params: { id: string } }) => {
    const [code, setCode] = useState<string>("")
    const router = useRouter()

    const verifyAction = async (e: any) => {
        e.preventDefault()
        const res = await verify(params.id, code);
        console.log(res);

        if (res?.statusCode == 201) {
            toast.success(res.message)
            router.push(`/auth/login`)
        } else {
            toast.error(res.message)
        }
    }

    return (
        <div className="shadow-md mx-auto my-12 bg-white p-3 rounded-md max-w-md">
            <form>
                <p className="font-semibold text-lg">Xác thực email</p>
                <p className="opacity-60 text-sm my-2">Trước khi tiếp tục, hãy nhập mã xác thực trong hòm thư
                    của bạn. Nhấn gửi lại link nếu bạn chưa nhận được email
                </p>
                <input
                    className="w-full px-4 py-2 my-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4"
                    type="text" placeholder="Mã xác thực" onChange={(e) => setCode(e.target.value)} />
                <button onClick={(e) => verifyAction(e)}
                    className="py-2 px-4 bg-blue-300 text-white rounded-sm">
                    Xác thực
                </button>
            </form>
        </div>
    )
}

export default VerifyPage
