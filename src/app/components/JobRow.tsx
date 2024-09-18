export default function JobRow() {
    return (
        <div className="bg-white shadow-sm">
            <div className="flex grow gap-4">
                <div className="content-center">
                    <img className="size-24" src="https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg" alt="logo" />
                </div>
                <div className="grow sm:flex">
                    <div className="grow">
                        <div className="text-sm text-gray-500 my-1">Spotify</div>
                        <div className="font-bold my-1">Graphic Designer</div>
                        <div className="text-xs text-gray-500 my-1">Remote &middot; New York &middot; United States &middot; Full-time</div>
                    </div>
                    <div className="content-end text-xs font-bold text-gray-500">2 minutes ago</div>
                </div>
            </div>
        </div>
    )
}