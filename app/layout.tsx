import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Malaram — A Kerala Homestay", description: "Slow mornings, warm hospitality and the quiet beauty of Kerala. Find your stay at Malaram." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
