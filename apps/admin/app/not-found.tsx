import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">404</h1>
        <p className="mt-2 text-sm text-gray-500">Page not found.</p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm text-gray-900 underline underline-offset-2"
        >
          Go to inquiries
        </Link>
      </div>
    </div>
  );
}
