import Jobs from "@/app/components/Jobs";
import { JobModel } from "@/models/Job";
import { connectToDatabase } from "@/utils/mongoose";
import { WorkOS } from "@workos-inc/node";

type PageProps = {
    params: {
        orgId: string;
    }
}

export default async function Job(props:PageProps) {
    const workOs = new WorkOS(process.env.WORKOS_API_KEY);
    const org = await workOs.organizations.getOrganization(props.params.orgId);
    await connectToDatabase();
    const jobDocs = await JobModel.find({orgId: org.id});

    return (
        <>
            <div className="container my-6">
                <div className="text-xl">
                    {org.name} Jobs
                </div>
            </div>
            <Jobs header={'Jobs posted by ' + org.name} jobs={jobDocs} />
        </>
    );
}