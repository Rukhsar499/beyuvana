import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy of Beyuvana',
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