import { KumaRegistry } from "@kuma-ui/next-plugin/registry"

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
      <body>
        <KumaRegistry>
          {children}
        </KumaRegistry>
      </body>
    </html>
  )
}
