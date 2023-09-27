import { getServerSession } from "next-auth"
import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import { redirect } from "next/navigation"

export default async function page() {
  let session = getServerSession(authOptions)
  session && redirect('/dashboard')

  return (
    <div>tis is the history page...</div>
  )
}
