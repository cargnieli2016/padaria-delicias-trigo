import { createFileRoute } from '@tanstack/react-router';
import { HomeHero, ValuesStrip, ProductSection, AboutSection, GallerySection, ContactSection } from '@/components/bakery/content';
import { pageHead } from '@/lib/bakery';
export const Route = createFileRoute('/')({ head: () => pageHead('Padaria e confeitaria em Monte Mor', 'Conheça a Delícias do Trigo: pães artesanais, confeitaria, cafés especiais e um espaço acolhedor no Jardim Paviotti, em Monte Mor.'), component: Index });
function Index() { return <><HomeHero /><ValuesStrip /><ProductSection /><AboutSection /><GallerySection /><ContactSection /></>; }
