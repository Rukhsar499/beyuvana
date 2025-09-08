import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Glow',
    description: 'Glow - Beyuvana',
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