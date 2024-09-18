import JobRow from "./JobRow";

export default function Jobs() {
    return (
        <div className="bg-slate-300 rounded mt-8 p-4">
            <h2 className="font-bold">Recent Jobs</h2>
            <div className="flex flex-col gap-4 *:px-4 *:py-4 *:rounded mt-4">
                <JobRow />
                <JobRow />
                <JobRow />
                <JobRow />
                <JobRow />
            </div>
        </div>
    )
}