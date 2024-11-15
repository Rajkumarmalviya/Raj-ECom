import { ReactComponent as Visa } from "../../../datas/svg/visa.svg";
import { ReactComponent as Mastercard } from "../../../datas/svg/mastercard.svg";
import { ReactComponent as AmericanExpress } from "../../../datas/svg/americanexpress.svg";
import { ReactComponent as PayPal } from "../../../datas/svg/paypal.svg";
import { ReactComponent as DinersClub } from "../../../datas/svg/dinersclub.svg";
import { ReactComponent as Discover } from "../../../datas/svg/discover.svg";
export default function OnlinePayment(){
    return(<div>
        <Visa />
        <Mastercard />
        <AmericanExpress />
        <PayPal />
        <DinersClub />
        <Discover />
      </div>)
}