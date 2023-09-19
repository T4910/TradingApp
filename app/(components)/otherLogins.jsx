import Google from "./googleBTN"

export default function otherLogins(reg) {
  return (
    <div className="pt-8 pb-8">
        <div className="w-[72vw] m-auto">
            <p className="mb-2">Or {reg ? 'sign up' : 'login'} with...</p>
            <div className="flex flex-col gap-2">
              <Google />
            </div>
        </div>
    </div>
  )
}
