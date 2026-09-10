import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Agnes Studio','description':'Private Agnes AI image and video workspace'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
