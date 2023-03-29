
export default function moredetail({ data }) {
    console.log(data);
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