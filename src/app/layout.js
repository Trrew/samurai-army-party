import { Providers } from './providers.js';
import './global.css';
export const metadata = {
  title: 'Samurai Community',
  description: 'Watch streams with other samurai',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        </body>
    </html>
  )
}
