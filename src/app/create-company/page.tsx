import { getUser } from "@workos-inc/authkit-nextjs";
import createOrg from "../actions/formActions";

export default async function CreateJobPost() {

    const { user } = await getUser();

    async function handleCreateCompany(data: FormData) {
        "use server";
        const name = data.get("name") as string;
        if (user) {
            await createOrg(name, user.id);
        }
    }

    return (
        <div className="container mt-6">
            <h2 className="text-lg">Create New Company</h2>
            <p className="text-gray-500">Create your company to post new job</p>
            <form className="my-2 flex gap-4" action={handleCreateCompany} autoComplete="off">
                <input
                    type="text"
                    className="border p-2 rounded-md"
                    name="name"
                    placeholder="Enter company name" />
                <button type="submit" className="inline-flex p-2 rounded-md items-center gap-2 bg-gray-200">
                    Create
                </button>
            </form>
        </div>
    );

}