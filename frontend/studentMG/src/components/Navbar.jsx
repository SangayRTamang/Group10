import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-2.5 bg-white border-b border-gray-100">

      {/* ICONS AND USER */}
      <div className="flex items-center gap-2 ml-auto">

        {/* Message icon */}
        <button className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
          <Image src="/message.png" alt="Messages" width={25} height={20} className="opacity-60" />
        </button>

        {/* Notification icon */}
        <button className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors relative">
          <Image src="/bell.png" alt="Notifications" width={25} height={20} className="opacity-60" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 mx-1" />

        {/* User info + avatar */}
        <div className="flex items-center gap-2.5 cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="text-right">
            <p className="text-xs font-medium text-gray-800 leading-tight">admin</p>
            <p className="text-[10px] text-gray-400 leading-tight">Admin</p>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
            <Image
              src="/person.png"
              alt="User avatar"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;