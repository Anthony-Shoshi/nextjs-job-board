import JobRow from "./JobRow";

export default function Jobs({header, jobs}:{header:string, jobs:any[]}) {
    return (
        <div className="bg-slate-300 rounded mt-8 p-4">
            <h2 className="font-bold">{header || 'Recent Jobs'}</h2>
            <div className="flex flex-col gap-4 *:px-4 *:py-4 *:rounded mt-4">
                {jobs && jobs.length }
                <JobRow />
            </div>
        </div>
    )
}