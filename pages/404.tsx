import type { NextPage } from "next";
import Link from "next/link";
import Seo from "../components/Seo";

const NotFound: NextPage = () => {
  return (
    <>
      <Seo title="Page not found" />
      <main className="mx-[6%] flex min-h-[80vh] flex-col items-center justify-center pt-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-subtle">
          404
        </p>
        <h1 className="font-display bolder-text mt-4 uppercase font-extrabold leading-[0.95] tracking-tight text-[clamp(3rem,11vw,6rem)]">
          Page not found
        </h1>
        <p className="mt-6 max-w-md text-sm text-muted md:text-base">
          That page doesn&apos;t exist any more — everything now lives on the
          home page.
        </p>
        <Link href="/">
          <a className="mt-10 rounded-full bg-fg px-6 py-3 text-sm font-bold text-bg transition duration-300 hover:-translate-y-0.5 hover:opacity-85">
            Back home
          </a>
        </Link>
      </main>
    </>
  );
};

export default NotFound;
