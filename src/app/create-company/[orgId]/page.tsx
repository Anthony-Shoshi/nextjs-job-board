import JobForm from "@/app/components/JobForm";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";

type PageProps = {
    params: {
        orgId: string;
    }
}

export default async function CreateJob(props: PageProps) {

    const { user } = await getUser();
    const workOs = new WorkOS(process.env.WORKOS_API_KEY);

    if (!user) {
        return (
            <div className="bg-blue-50 p-2 rounded-md mt-2">
                You need to login to post new job!
            </div>
        );
    }

    const ordId = props.params.orgId;
    const oms = workOs.userManagement.listOrganizationMemberships({
        userId: user.id,
        organizationId: ordId
    })

    const hasAccess = (await oms).data.length > 0

    if (!hasAccess) {
        return (
            <div className="bg-blue-50 p-2 rounded-md mt-2">
                You do not have access!
            </div>
        );
    }

    return (
        <JobForm />
    );
}