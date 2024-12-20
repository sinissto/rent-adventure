import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-700 w-full">
      <span className={"pb-1"}>
        <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
      </span>

      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
