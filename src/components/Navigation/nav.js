import Link from "next/link"
import { useRouter } from "next/router"

export default function Nav() {
    const router = useRouter()
    const { pathname } = router
    const active = 'text-white text-2xl'
    
    return(
      <div>
        <ul>
            <div className="flex text-gray-500 space-x-5 font-semibold px-3 justify-center text-xl mb-4">
                <li className={pathname === '/' ? active : ''}>
                    <Link href={`/`}>Home</Link>    
                </li>
                <li>Recomendations</li>
                <li>Genres</li>
                <li>Schedules</li>
                <li>TopAnime</li>
            </div>
        </ul>
      </div>
    )
  }