import { Link } from 'react-router-dom';
const Sidebar = () => (
    <div className="h-full md:w-64 w-36  border-r border-zinc-700">
        <div className="mb-2">
            <div className="flex h-12 max-h-12 items-center border-b px-6 border-zinc-700">
                <h4 className="mb-0 text-lg text-white font-semibold" ><Link to={'/'}> <img
                    className="md:h-6 h-4"
                    src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75"
                    alt="Supabase Logo"
                />
                </Link></h4>
            </div>
        </div>
        <div className="-mt-1">
            <nav >
                <ul>
                    <div className="border-b py-5 px-6 border-zinc-700">
                        <div className="flex space-x-3 mb-2 font-normal">
                            <span className="text-sm text-foreground-lighter w-full font-semibold">Projects</span>
                        </div>
                        <ul className="space-y-1">

                            <span >
                                <span className="text-sm hover:text-white transition-all duration-300 hover:cursor-pointer">All projects</span>
                            </span>

                        </ul>
                    </div>
                    <div className="border-b py-5 px-6 border-zinc-700">
                        <div className="flex space-x-3 mb-2 font-normal">
                            <span className="text-sm text-foreground-lighter w-full font-semibold">Organizations</span>
                        </div>
                        <ul className="space-y-1">

                            <span className="text-sm hover:text-white transition-all duration-300 hover:cursor-pointer">siddharth122002's Org</span>

                        </ul>
                    </div>
                    <div className="border-b py-5 px-6 border-zinc-700">
                        <div className="flex space-x-3 mb-2 font-normal">
                            <span className="text-sm text-foreground-lighter w-full font-semibold">Account</span>
                        </div>
                        <ul className="space-y-1">

                            <span className="text-sm hover:text-white transition-all duration-300 hover:cursor-pointer">Preferences</span>

                            <a className="block" >

                                <span className="text-sm hover:text-white transition-all duration-300 hover:cursor-pointer">Access Tokens</span>

                            </a>
                            <a className="block" >

                                <span title="Security" className="text-sm hover:text-white transition-all duration-300 hover:cursor-pointer">Security</span>

                            </a>
                            <a className="block" >

                                <span className="text-sm hover:text-white transition-all duration-300 hover:cursor-pointer">Audit Logs</span>

                            </a>
                        </ul>
                    </div>
                    <div className="border-b py-5 px-6 border-zinc-700">
                        <div className="flex space-x-3 mb-2 font-normal">
                            <span className="text-sm text-foreground-lighter w-full font-semibold">Documentation</span>
                        </div>
                        <ul className="space-y-1">
                            <a className="block" >
                                <span className="group flex max-w-full cursor-pointer items-center space-x-2 border-zinc-700 py-1 font-normal outline-none ring-foreground focus-visible:z-10 focus-visible:ring-1 group-hover:border-foreground-muted">
                                    <span className="truncate text-sm text-foreground-lighter transition group-hover:text-foreground-light ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"   >
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                    <span title="Guides" className="text-sm hover:text-white transition-all duration-300 hover:cursor-pointer">Guides</span>
                                </span>
                            </a>
                            <a className="block" >
                                <span className="group flex max-w-full cursor-pointer items-center space-x-2 border-zinc-700 py-1 font-normal outline-none ring-foreground focus-visible:z-10 focus-visible:ring-1 group-hover:border-foreground-muted">
                                    <span className="truncate text-sm text-foreground-lighter transition group-hover:text-foreground-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="sbui-icon">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                    <span title="API Reference" className="text-sm hover:text-white transition-all duration-300 hover:cursor-pointer">API Reference</span>
                                </span>
                            </a>
                        </ul>
                    </div>
                    <div className="border-b py-5 px-6 border-zinc-700">
                        <ul className="space-y-1">
                            <li className="cursor-pointer flex space-x-3 items-center outline-none focus-visible:ring-1 ring-foreground-muted focus-visible:z-10 group py-1 font-normal border-zinc-700 group-hover:border-foreground-muted" >
                                <div className="transition truncate text-sm text-foreground-lighter group-hover:text-foreground-light min-w-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="sbui-icon">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>
                                </div>
                                <span className="text-sm hover:text-white transition-all duration-300 hover:cursor-pointer font-semibold">Log out</span>
                            </li>
                        </ul>
                    </div>
                </ul>
            </nav >
        </div >
    </div >
);
export default Sidebar;