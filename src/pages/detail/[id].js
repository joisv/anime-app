import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

export default function DetailById() {
  const router = useRouter()
  const { id } = router.query 
  const ids = 12
  const hanldeMoreInfoButton = () => {
  router.push(`/detail/moredetail?q=${ids}`)
  }
  return (
    <main>
      <div className="min-h-screen flex flex-wrap justify-center relative">
          <div className="relative sm:w-[18vw] sm:h-[50vh] w-[45vw] h-[30vh]">
              <Image 
                src="/img/mao.webp"
                priority
                fill
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
                className='object-cover'
                alt="mao"
                />
          </div>
          <div className="border-2 border-b-white sm:h-[30vh] h-[15vh] sm:w-full w-[80%] absolute border-t-0 border-x-0 top-44">
            <div className="relative right-0 w-full h-full">
              <svg width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute rotate-180 sm:-left-8 -left-8 sm:bottom-0 bottom-3">
                <circle cx="10.5" cy="10.5" r="9.5" stroke="white" strokeWidth="2"/>
                <path d="M17.1537 11.1535C17.3489 10.9583 17.3489 10.6417 17.1537 10.4464L13.9717 7.26445C13.7764 7.06919 13.4598 7.06919 13.2646 7.26445C13.0693 7.45972 13.0693 7.7763 13.2646 7.97156L16.093 10.8L13.2646 13.6284C13.0693 13.8237 13.0693 14.1403 13.2646 14.3355C13.4598 14.5308 13.7764 14.5308 13.9717 14.3355L17.1537 11.1535ZM3.6001 11.3H16.8001V10.3H3.6001V11.3Z" fill="white"/>
              </svg>
              <svg width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute sm:-right-8 -right-8 sm:bottom-0 bottom-3">
                <circle cx="10.5" cy="10.5" r="9.5" stroke="white" strokeWidth="2"/>
                <path d="M17.1537 11.1535C17.3489 10.9583 17.3489 10.6417 17.1537 10.4464L13.9717 7.26445C13.7764 7.06919 13.4598 7.06919 13.2646 7.26445C13.0693 7.45972 13.0693 7.7763 13.2646 7.97156L16.093 10.8L13.2646 13.6284C13.0693 13.8237 13.0693 14.1403 13.2646 14.3355C13.4598 14.5308 13.7764 14.5308 13.9717 14.3355L17.1537 11.1535ZM3.6001 11.3H16.8001V10.3H3.6001V11.3Z" fill="white"/>
              </svg>
            </div>
            <div className="mt-5 text-white">
              <h2>ヴィンランド・サガ SEASON2</h2>
              <h1 className="font-medium text-2xl mb-3">Vinland Saga Season 2</h1>
              <p className="italic">Action, Drama, Adventure</p>
            </div>
            <div className="mt-10">
                <button className="px-3 py-2 bg-white w-full" onClick={hanldeMoreInfoButton}>
                  <h2 className="text-xl font-medium">More detail</h2>
                </button>
            </div>
          </div>
      </div>
    </main>
  )
}
