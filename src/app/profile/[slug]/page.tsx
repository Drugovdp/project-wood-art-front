import { Suspense } from "react"
import { ProfileContent } from "./profile-content"

export default function ProfileSlug() {

    return (
        <Suspense fallback={<p>Загрузка профиля...</p>}>
            <ProfileContent />
        </Suspense>
    )
}