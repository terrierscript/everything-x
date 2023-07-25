export const metadata = {
  title: '𝔼𝕧𝕖𝕣𝕪𝕥𝕙𝕚𝕟𝕘 𝕏',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
