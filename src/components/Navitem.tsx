import Link from "next/link";

export default function Navitem({
  mobile,
}: {mobile?: boolean}) {
  return (
    <>
      <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && 'flext-col h-full'}`}>
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <Link href='/admin'>Admin</Link>
        </li>
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <Link href='/admin'>User</Link>
        </li>
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button>Sign-out</button>
        </li>
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button>Sign-in</button>
        </li>
      </ul>
    </>
  )
}