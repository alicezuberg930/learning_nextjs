import { Inter } from "next/font/google"
import Link from "next/link"
import type { Metadata } from 'next'
import '../globals.css'

const inter = Inter({ subsets: ['vietnamese'] })

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}


