import Pages from "./footerPages"
import Links from "./footerLinks"
import Contacts from "./footerContacts"

export default function Footer() {
  return (
    <div className="grid md:px-8 lg:px-8">
      <h3 className="px-8 pt-8 text-xl font-semibold h-max col-span-2">TradeUp</h3>
      <Contacts />
      <Pages />
      <Links />
      <div className="col-span-2 mx-4 mb-4">Copyright&copy;EmmanuelTaiwo</div>
    </div>
  )
}
