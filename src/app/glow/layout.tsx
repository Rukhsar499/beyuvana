import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'collagen',
    description: 'collagen - Beyuvana',
  }


export default function StoryLayout({
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