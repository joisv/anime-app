
export default function moredetail({ data }) {
  
  return (
    <div>
      
    </div>
  )
}

export async function getServerSideProps(context) {
    const { query } = context;
    const data = query
    return {
        props : { data }
    }
}