"use server";

import { WorkOS } from "@workos-inc/node";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const workOs = new WorkOS(process.env.WORKOS_API_KEY);

export default async function createOrg(name: string, userId: string) {
    const org = await workOs.organizations.createOrganization({
        name: name as string,
    });

    await workOs.userManagement.createOrganizationMembership({
        userId: userId,
        organizationId: org.id,
        roleSlug: 'admin',
    });
    revalidatePath('/create-job-post');
    redirect('/create-job-post');
}