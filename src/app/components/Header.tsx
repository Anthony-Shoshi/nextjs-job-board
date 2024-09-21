import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header() {
    const { user } = await getUser();
    const signInUrl = await getSignInUrl();

    return (
        <header>
            <div className="items-center flex justify-between">
                <Link href={'/'} className="font-bold text-xl">Job Board</Link>
                <nav className="flex gap-2">
                    {
                        !user && (
                            <Link href={signInUrl} className="p-2 rounded bg-gray-400 hover:bg-gray-500 text-white">Login</Link>
                        )
                    }
                    {
                        user && (
                            <>
                                <div className="p-2">
                                    Welcome {user.firstName && `, ${user.firstName}`}
                                </div>
                                <form action={
                                    async () => {
                                        'use server';
                                        await signOut();
                                    }
                                }>
                                    <button type="submit" className="p-2 rounded bg-gray-400 hover:bg-gray-500 text-white">Logout</button>
                                </form>
                            </>
                        )
                    }
                    <Link href={'/create-job-post'} className="p-2 rounded bg-orange-600 hover:bg-orange-500 text-white">Post a Job</Link>
                </nav>
            </div>
        </header>
    );
}