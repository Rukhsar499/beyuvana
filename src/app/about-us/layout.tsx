import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About Beyuvana',
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