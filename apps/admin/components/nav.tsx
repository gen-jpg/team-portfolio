import Link from "next/link";
import { createClient } from "@/lib/supabase-server";
import { SignOutButton } from "./sign-out-button";

export async function Nav() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-bold tracking-tight">
          HABI³ <span className="font-normal text-gray-400">Admin</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          {user?.email && <span>{user.email}</span>}
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
