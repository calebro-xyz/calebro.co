module.exports = {
    purge: {
        node: 'layers',
        content: ['./public/**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            color: {}
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
module.exports = {

    daisyui: {
        themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade"],
    },
}