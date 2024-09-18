import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="items-center flex justify-between">
                <Link href={'/'} className="font-bold text-xl">Job Board</Link>
                <nav className="flex gap-2 *:p-2 *:rounded">
                    <Link href={'/login'} className="bg-gray-400 hover:bg-gray-500 text-white">Login</Link>
                    <Link href={'/post-new-job'} className="bg-orange-600 hover:bg-orange-500 text-white">Post a Job</Link>
                </nav>
            </div>
        </header>
    );
}