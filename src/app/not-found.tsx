import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <div>NOT FOUND 404</div>
            <Link href={'/'}>Go to main</Link>
        </div>
    )
}