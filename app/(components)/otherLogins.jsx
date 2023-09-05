import Google from "./googleBTN"

export default function otherLogins() {
  return (
    <div className="pt-4 border-t">
        <div className="w-[64vw] m-auto">
            <p className="mb-2">Login with...</p>
            <Google />
        </div>
    </div>
  )
}
