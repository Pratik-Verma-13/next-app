import Link from "next/link"

export default function Home(){
  return(
    <>
      <h1>Home</h1>
      <Link href="/teams" style={{
        color: "white"
      }}>teams</Link>
      <Link href="/schedule">Schedule</Link>
    </>
  )
}