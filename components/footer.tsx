import Link from "next/link";

export function Footer() {
  return (
    <footer className="bottom-0 py-10 text-center text-sm bg-[#1b1b1b]   text-[#fcfbfb]">
      <p>
        <a href="tel:+37400000000">Լեա |000 00 00 00</a>
      </p>
      <p>
        <a href="tel:+37400000000">Լեո | 000 00 00 00</a>
      </p>
      <hr className="my-5" />
      <Link href="https://www.instagram.com/webinvite.am/">
        <p className="mt-2">
          Պատրաստվել է Web Invite կողմից
        </p>
      </Link>
    </footer>
  );
}
