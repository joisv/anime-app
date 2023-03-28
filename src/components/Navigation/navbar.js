import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="w-full flex items-center p-5 justify-between">
       
            <svg width="30px" height="30px" className="fill-white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0 0h48v48H0z" fill="none"/>
                <g id="Shopicon">
                    <path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12
                        c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8
                        s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"/>
                </g>
            </svg>
        
        <div className="flex w-24 items-center justify-between">
          <Link href='/search'> 
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="0.048">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z" fill="#ededed"/> </g>
                </svg>
            </Link>
            <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-1.5" x2="22" y2="-1.5" transform="matrix(-0.000377435 1 -0.931702 0.363225 0.00830078 6)" stroke="white" strokeWidth="3"/>
                <line y1="-1.5" x2="22" y2="-1.5" transform="matrix(-0.000377435 1 -0.931702 0.363225 8.0083 2)" stroke="white" strokeWidth="3"/>
                <line y1="-1.5" x2="22" y2="-1.5" transform="matrix(-0.000377435 1 -0.931702 0.363225 16.0083 4)" stroke="white" strokeWidth="3"/>
            </svg>
        </div>
      </div>
    </nav>
  )
}
