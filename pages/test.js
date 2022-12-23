import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const InvoicePDF = dynamic(() => import("./myPdfView"), {
    ssr: false
})

export default function Test() {
    const [client, setClient] = useState(false)

    useEffect(() => {
        setClient(!client)
    }, [])

    return (
        <InvoicePDF/>
    )
}