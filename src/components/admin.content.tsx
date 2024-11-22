'use client'

import React from "react";

const AdminContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-full overflow-y-auto">
            <div className="container grid px-6 py-3 mx-auto">
                {children}
            </div>
        </main>
    )
}

export default AdminContent;