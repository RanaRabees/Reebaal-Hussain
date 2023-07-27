import './globals.css'


export const metadata = {
  title: 'Reebaal - Hussain',
  description: "👻 Welcome to my portfolio website! I've created this site using Next.js to showcase my best work as a creative professional. You'll find examples of my projects and can learn more about me and my skills on the About page. Feel free to get in touch via the Contact page if you're interested in working together. Thank you for visiting! 👻",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script src="./script.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script>
          AOS.init();
        </script>
        {children}
      </body>
    </html>
  )
}
