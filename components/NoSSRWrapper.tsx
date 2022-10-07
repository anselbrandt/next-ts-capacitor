import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const NoSSRWrapper: React.FC<PropsWithChildren> = ({ children }) => <>{children}</>

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
    ssr: false
})