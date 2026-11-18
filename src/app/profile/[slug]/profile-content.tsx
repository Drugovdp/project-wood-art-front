"use client"

import { useParams, useSearchParams } from "next/navigation"

export const ProfileContent = () => {
    const params = useParams()
    const searchParams = useSearchParams()

    return (
        <>
            <div>Профиль пользователя: {params.slug}</div>
            <div>Профиль пользователя: {searchParams.get('title')}</div>
        </> 
    )
}