"use client";

import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();
  const supabase = createClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-sm text-gray-500 underline-offset-2 hover:text-gray-900 hover:underline"
    >
      Sign out
    </button>
  );
}
