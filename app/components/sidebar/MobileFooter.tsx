'use client';

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import SettingsModal from "./SettingsModal";
import { User } from "@prisma/client";
import { useState } from "react";
import Avatar from "../Avatar";

interface MobileFooterProps {
  currentUser: User
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
  const routes = useRoutes();
  // const { isOpen } = useConversation();
  const [isOpen, setIsOpen] = useState(false);

  // if (isOpen) {
  //   return null;
  // }
  return (
    <div
      className="
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
        bg-white 
        border-t-[1px] 
        lg:hidden
      "
    >

      <SettingsModal currentUser={currentUser} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div
        onClick={() => setIsOpen(true)}
        style={{margin:"10px 10px 3px 15px"}}
        className="cursor-pointer hover:opacity-75 transition"
      >
        <Avatar user={currentUser} />
      </div>

      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
}

export default MobileFooter;