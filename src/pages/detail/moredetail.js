import { motion as m } from 'framer-motion'

export default function moredetail({ data }) {
  
  return (
    <m.div 
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="w-full absolute bg-violet-500">
      <h1 className='text-white '>Halo dunia</h1>
    </m.div>
  )
}

export async function getServerSideProps(context) {
    const { query } = context;
    const data = query
    return {
        props : { data }
    }
}