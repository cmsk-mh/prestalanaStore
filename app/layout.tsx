import Link from "next/link";
export const metadata = {
  title: 'Presta Lana',
  description: ' ... ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/login">Login</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
