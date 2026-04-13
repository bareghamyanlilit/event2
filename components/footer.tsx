import Link from "next/link";

export function Footer() {
  return (
    <footer className="bottom-0 py-10 text-center text-sm bg-[#1b1b1b]   text-[#fcfbfb]">
      <p>
        <a href="tel:+37400000000">Լեա |098 76 54 32</a>
      </p>
      <p>
        <a href="tel:+37400000000">Լեո | 098 76 54 32</a>
      </p>
      <hr className="my-5" />
      <Link href="https://www.instagram.com/siteup.am/">
        <p className="mt-2">
          Պատրաստվել է <span className="underline">siteup.am</span>-ի կողմից
        </p>
      </Link>
    </footer>
  );
}
