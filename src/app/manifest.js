

export default function manifest(){
    return{
        name: "Next.js App",
        short_name: "Next.js App",
        description: "Next.js App",
        start_url: "/",
        display: "standalone",
        background: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/favicon-16x16.png",
                sizes: "16X16",
                type: "image/png"
            },
            {
                src: "/favicon-32x32.png",
                sizes: "132X32",
                type: "image/png"
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192X192",
                type: "image/png"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            },
        ],
    }
}