import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, GallerySection } from '@/components/bakery/content';
import { pageHead } from '@/lib/bakery';
export const Route = createFileRoute('/galeria')({ head: () => pageHead('Galeria de sabores e ambiente', 'Explore a galeria ilustrativa de pães, doces, cafés, salgados e ambiente da Delícias do Trigo.'), component: Gallery });
function Gallery() { return <><PageIntro eyebrow="DETALHES QUE ENCANTAM" title="Um gostinho do nosso universo." text="Entre aromas, sabores e bons encontros, a vontade é ficar." /><GallerySection full /></>; }
