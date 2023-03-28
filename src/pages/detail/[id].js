import { useRouter } from "next/router"

export default function DetailById() {
  const router = useRouter()
  const { id } = router.query 
   
  return (
    <div>
      {id}
    </div>
  )
}
