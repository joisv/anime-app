import Search from "./Search/search"
export default function RightIndex() {
  return (
    <section className='h-screen col-span-4 hidden sm:block p-3'>
      <Search />
      <div className="mt-8">
        <div className="flex items-center">
        <h1 className="text-2xl font-medium">Top Anime</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
          </svg>
          
        </div>

      </div>
    </section>
  )
}
