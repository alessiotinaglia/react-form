# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Esercizio

Partendo dall'esercizio di ieri e dall'array di posts allegato, l'obiettivo è creare dinamicamente gli articoli all'interno della pagina.

I dati relativi a ciascun post dovranno essere passati come props ai componenti.

Ogni post ha una proprietà published, e gli articoli devono essere mostrati solo se questa proprietà è impostata su `true`.

Assegnate colori diversi ai tag dei posts, ad esempio: verde per html, rosa per css,

Se un post non ha un'immagine, inserite un'immagine di default, potete utilizzare uno 

dei tanti servizi online come:

> - https://placehold.co/
> - https://picsum.photos/

Bonus

 Aggiungi una sezione nella pagina in cui mostrare la lista dei tag distinti senza ripetizioni.
 
Buon lavoro! :muscolo:
const posts = [
  {
    id: 1,
    title: "Titolo del Post",
    image: '',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    published: true,
  },
  {
    id: 2,
    title: "Titolo del Post",
    image: '',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    published: true,
  },
  {
    id: 3,
    title: "Titolo del Post",
    image: '',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    published: true,
  },
  {
    id: 4,
    title: "Titolo del Post",
    image: '',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    published: false,
  },
];

export default posts;