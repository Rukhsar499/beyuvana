import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Terms and Condition',
    description: 'Terms and Condition of Beyuvana',
  }


export default function Terms({
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