import '@tailwindplus/elements';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul className="flex flex-col decoration-0 text-xl font-bold text-gray-600 py-10 w-96 h-screen bg-emerald-100">
      <el-dropdown class="inline-block">
        <button
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md hover:bg-amber-50 px-3 py-2 text-sm font-semibold text-gray-600 inset-ring-1 inset-ring-white/5"
        >
          Roles
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </button>

        <el-menu
          anchor="bottom end"
          popover
          class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            <Link
              to="/role-list"
              className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
            >
              Role List
            </Link>
            <Link
              to="/create-role"
              className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
            >
              Create a Role
            </Link>
          </div>
        </el-menu>
      </el-dropdown>
    </ul>
  );
};

export default Sidebar;
