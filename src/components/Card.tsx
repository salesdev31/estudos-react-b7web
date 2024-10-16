import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Card = ({ children }: Props)=> {
    return (
        <div className="border-2 border-red-600 p-3 text-3xl text-center mt-5 mx-5 w-96">
            {children}
        </div>
    );
}