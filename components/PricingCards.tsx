import { CheckCheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";
import { buttonVariants } from "@/components/ui/button"


const tiers = [
    {
    name: "Starter",
    id: "starter",
    href: "#",
    priceMonthly: null,
    description: "Start Chatting right away with anyone, anywhere",
    features: [
        "20 Message Chat Limit in Chats",
        "2 Parcticipant limit in Chat",
        "Chat Rooms limit",
        "Support 2 languages",
        "48-hour support response time "
    ],
    },
    {
        name: "Pro",
        id: "si_OnlcsLNQYbMVzV",
        href: "#",
        priceMonthly: "R10.99",
        description: "Unloack full potential with Pro",
        features: [
            "Unlimited Message Chat Limit in Chats",
            "Unlimited  Parcticipant limit in Chat",
            " Unlimited Chat Rooms limit",
            "Support up to 10 languages",
            "1-hour support response time ",
            "Early access to New Features"
        ],
        },

];




function Pricingcards({redirect} : {redirect: boolean}) {
  return (
   <div>
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
            <div key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
              >
                <div className="">
                    <h3 id={tier.id + tier.name}
                    className="text-base font-semibold leading-7 text-indigo-600"
                >
                        {tier.name}
                    </h3>
                    <div className=" mt-4 flex items-baseline gap-x-2">
                        {tier.priceMonthly ? (
                            <>
                            <span className= "text-5xl font-bold tracking-tight text-gray-900">
                                {tier.priceMonthly}
                            </span>
                            <span className="text-base font-semibold leading-7 text-gray-600">
                                /month
                            </span>
                            </>
                        ): (
                            <span  className="text-5xl font-semibold tracking-tight text-gray-900">
                                Free
                            </span>
                        )}
                    </div>
                    <p className=" mt-6 text-base leading-7 text-gray-600">
                        {tier.description}
                    </p>
                    <ul
                    role="list"
                    className="mt-10 space-y-4 text sm leading-6 text-gray-600"
                    >
                        {tier.features.map((feature) =>(
                            <li key={feature} className="flex gap-x-3">
                                <CheckCheckIcon
                                className="h-6 w-5 flex-none text-indigo-600"
                                aria-hidden="true"
                                />
                                {feature}

                            </li>
                        ))}
                        
                    </ul>
                </div>

                {redirect ? (
                    <Link href="/register"
                    className={buttonVariants({ variant: "outline" })}
                    >
                    Get Started today
                    </Link>
                ): (
                    tier.id && <CheckoutButton/>
                )}



            </div>

        ))}
    </div>
   </div>
  )
}

export default Pricingcards