import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Products',
    description: 'Products of Beyuvana',
  }


export default function ProductsLayout({
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