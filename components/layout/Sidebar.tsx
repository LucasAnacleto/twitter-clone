import { BsHouseFill, BsBellFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import { BiLogOut } from 'react-icons/bi'
import SidebarTweetButton from './SidebarTweetButton';
import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();

    const items = [
        {
            icon: BsHouseFill,
            label: 'Página Inicial',
            href: '/',
        },
        {
            icon: BsBellFill,
            label: 'Notificações',
            href: '/notifications',
            auth: true,
        },
        {
            icon: FaUser,
            label: 'Perfil',
            href: `/users/${currentUser?.id}`,
            auth: true,
        },
    ]
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            icon={item.icon}
                            label={item.label}
                            auth={item.auth}
                        />
                    ))}
                    {currentUser && (
                        <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Sair" />
                    )}
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;