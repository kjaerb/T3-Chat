import clsx from "clsx";
import { ImSpinner2 } from "react-icons/im";

export default function Loading() {
  return (
    <div
      className={clsx(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
      )}>
      <ImSpinner2 className='animate-spin' />
    </div>
  );
}
