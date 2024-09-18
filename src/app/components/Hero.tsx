export default function Hero() {
    return (
        <section className="mt-12">
            <h1 className="text-center text-4xl font-bold text-gray-800 py-2">
                Find your next <br /> dream job
            </h1>
            <p className="text-center text-gray-700 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam, expedita natus, debitis accusantium sit ea odit.
            </p>
            <form className="flex gap-2 py-2">
                <input className="w-full border border-gray-700 rounded-md py-2 px-4" type="text" name="search" placeholder="Search job . . ." />
                <button className="bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-md text-white" type="button">Search</button>
            </form>
        </section>
    )
}