import { authOptions } from "@/auth"
import Pricingcards from "@/components/PricingCards"
import { getServerSession } from "next-auth"


async function Register() {

const  session = await getServerSession(authOptions)



  return (
    <div className="isolate overflow-hidden bg-gray-900">
    <div className="max-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">

            <p className=" mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Lest handle your Membership {session?.user?.name?.split(" ")?.[0]}!
            </p>
        </div>
        <div className="relative mt-6">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                Were are 99% sure we havce plan to match 100% of your needs
            </p>
            <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image: radial-gradient(closest-side, white , transparent)] sm:-top-12 lg:-top-12 xl:top-0"
            >
                <ellipse
                cx={684}
                cy={512}
                fill="url(#radial-gradient-pricing)"
                rx={684}
                ry={512}
                />
                <defs>
                    <radialGradient id="radial-gradient-pricing">
                        <stop stopColor="#777506"/>
                        <stop  offset={1} stopColor="#E935C1"/>

                    </radialGradient>
                </defs>
            </svg>
        </div>
    </div>
    <div  className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
            <Pricingcards redirect={false}/>
        
        </div>
    </div>
</div>
  )
}

export default Register