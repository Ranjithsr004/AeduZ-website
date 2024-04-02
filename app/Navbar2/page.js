"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'My Profile', href: '/Component/MenteeProfile' },
    { name: 'Call History', href: '/Component/TableData' },
    { name: 'Book Now', href: '/CheckOut' },
    { name: 'Contact Us', href: '/ContactPage' }
  ]

  function Navbar2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
      <div className="w-full">
        <header className="absolute bg-[#111827] inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <img className="h-12 w-auto" src="https://media.licdn.com/dms/image/D560BAQH6XGSlZuae0Q/company-logo_200_200/0/1708798945374/aeduz_logo?e=1718236800&v=beta&t=mkoKHLYtHQYhXhlQxDVIc7mpwFApukMRJ-ehHiJK9Ms"/>
              </a>
              
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
                <img className='size-8' src="https://cdn-user-icons.flaticon.com/138337/138337623/1712082891242.svg?token=exp=1712083793~hmac=4b8c3faf357a1ce17356d0583dc6b091" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-white hover:border-b-2 hover:border-b-white">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/LogIn" className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Log in
              </Link>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <img className="h-12 w-auto" src="https://media.licdn.com/dms/image/D560BAQH6XGSlZuae0Q/company-logo_200_200/0/1708798945374/aeduz_logo?e=1718236800&v=beta&t=mkoKHLYtHQYhXhlQxDVIc7mpwFApukMRJ-ehHiJK9Ms"/>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/LogIn"
                      className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        </div>
    )
}  
export default Navbar2