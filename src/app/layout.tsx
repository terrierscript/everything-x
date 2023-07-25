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
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
      </head>
      <body>
        <KumaRegistry>
          {children}
        </KumaRegistry>
      </body>
    </html>
  )
}
