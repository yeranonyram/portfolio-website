import type React from "react";

interface Props {
    children: React.ReactNode;
}

export const MainLayout = ({ children}: Props) => {
    return(
        <main className="min-h-screen bg-neutral-950 text-whit">
            {children}
        </main>
    )
}