
export default function Search() {
  return (
    <div>
        <form>   
            <div class="relative">
                <h1 className='text-2xl font-medium text-end pr-3'>What you <br />looking for ?</h1>
                <input type="search" id="default-search" class="block w-full px-4 pb-2 text-base text-slate-300 focus:border-b-2 border-slate-300 focus:border-gray-700 bg-transparent border-0 border-b-2 focus:outline-none placeholder:text-gray-600 placeholder:italic" autoComplete='off' placeholder="masukan judul" ></input>
            </div>
        </form>
    </div>
  )
}
