import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Bell, ChevronDown, Search } from 'lucide-react'
import React from 'react'
import usePageTitle from '@/hooks/usePageTitle'

const user = {
  name: "Fatlum Kallaba",
  role: "Administrator",
  avatar: "",
}

const Navbar = () => {
  const title = usePageTitle()

  return (
    <header className="flex items-center justify-between w-full px-6 py-3 bg-white border-b">
      <h1 className="text-xl font-bold">{title}</h1>

  {/* Center - Search absolute */}
  <div className="absolute left-1/2 -translate-x-1/2">
    <div className="relative w-80">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
      <Input
        placeholder="Search of type command..."
        className="pl-9 bg-gray-100 border-0 focus-visible:ring-0 text-base h-11"
      />
    </div>
  </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="size-5" />
          <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="h-9 w-9 rounded-full">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-semibold leading-tight">{user.name}</p>
            <p className="text-xs text-gray-400">{user.role}</p>
          </div>
          <ChevronDown className="size-4 text-gray-400" />
        </div>
      </div>
    </header>
  )
}

export default Navbar