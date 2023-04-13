export default function Footer() {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-10 bg-indigo-900">
            <div className="max-w-screen-xl mx-auto px-4 text-slate-400 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        <div className="flex gap-2">
                            <img src="/icons/nextjs.svg" className="" />
                            Logo
                        </div>
                        <p className="max-w-md">
                            Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur.
                        </p>
                        <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                            {
                                footerNavs.map((item, idx) => (
                                    <li className="text-white hover:text-purple-400 duration-150">
                                        <a key={idx} href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* <div className="mt-6">
                        <p className="text-gray-700 font-semibold">Get the app</p>
                        <div className="flex items-center gap-3 mt-3 sm:block">
                        
                        </div>
                    </div> */}
                </div>
                <div className="mt-10 py-10 border-t md:text-center">
                    <p>© 2022 Float UI Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}