import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{ padding: 10, borderBottom: "1px solid gray" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/blog">Blog</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/contact">Contact</Link> |{" "}
      <Link href="/privacy-policy">Privacy Policy</Link>
    </div>
  );
}
