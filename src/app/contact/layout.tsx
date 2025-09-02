import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact Beyuvana for glowing skin',
  }


export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
        </>
    )
}