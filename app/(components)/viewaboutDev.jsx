'use client'
import { useRouter } from "next/router"

export default function viewaboutDev() {
    const router = useRouter()
    return (
        <button onClick={() => router.replace('/about')} className="block w-1/2 m-auto p-4 py-2 my-4 bg-primary font-medium rounded">View more about developer</button>
    )
}
