import Link from "next/link";

 const NotFound=()=> {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#C2F800]">404</h1>

        <h2 className="mt-4 text-3xl font-bold">
          Workout Not Found
        </h2>

        <p className="mt-3 text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;