import { sidebarContent } from './SideBarContent'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <aside className='h-screen w-64 bg-gray-200 border-gray-300'>
        <nav className='flex h-full flex-col p-4'>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenido</h2>
          <ul className='space-y-2'>
            {
              sidebarContent.map((item, index) => {
                return (
                  <li key={index} className="hover:bg-gray-300 rounded-md">
                    <Link href={item.path} className="block p-2 text-gray-800 text-sm">
                      {item.title}
                    </Link >
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar;