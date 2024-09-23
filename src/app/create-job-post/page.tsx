import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import { AutoPaginatable, OrganizationMembership, WorkOS } from "@workos-inc/node";
import Link from "next/link";

export default async function CreateJobPost() {

    const { user } = await getUser();
    const workOs = new WorkOS(process.env.WORKOS_API_KEY);
    let orgs: AutoPaginatable<OrganizationMembership> | null = null;

    if (!user) {
        return (
            <div className="bg-blue-50 p-2 rounded-md mt-2">
                You need to login to post new job!
            </div>
        );
    }

    orgs = await workOs.userManagement.listOrganizationMemberships({
        userId: user.id
    });

    const activeOrgs = orgs.data.filter(ao => ao.status === 'active');
    const orgList: { [key: string]: string } = {}
    for (const activeOrg of activeOrgs) {
        const org = await workOs.organizations.getOrganization(activeOrg.organizationId);
        orgList[org.id] = org.name;
    }

    return (
        <div className="container mt-6">
            {user && (
                <>
                    <h2 className="text-lg">Your companies</h2>
                    <p className="text-gray-500">Select a company to create new job</p>
                    {orgs == null || orgs.data.length === 0 ? (
                        <div className="bg-blue-50 p-2 rounded-md mt-2">
                            No companies found for this user.
                        </div>
                    ) : (
                        <div>
                            <ul className="*:border *:p-2 *:my-2 inline-block rounded-md">
                                {Object.keys(orgList).map(ol => (
                                    <Link href={`/create-company/${ol}`} className="flex items-center gap-2 hover:bg-gray-200">
                                        {orgList[ol]}
                                        <FontAwesomeIcon className="h-4" icon={faArrowRight}></FontAwesomeIcon>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    )}

                    <Link href={`/create-company`} className="inline-flex p-2 rounded-md items-center gap-2 bg-gray-300 hover:bg-gray-400">
                        Create New Company
                        <FontAwesomeIcon className="h-4" icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                </>
            )}
        </div>
    )
}