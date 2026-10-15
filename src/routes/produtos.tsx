import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ProductSection } from '@/components/bakery/content';
import { pageHead } from '@/lib/bakery';
export const Route = createFileRoute('/produtos')({ head: () => pageHead('Nossas delícias', 'Pães artesanais, confeitaria fina, cafés especiais, salgados e café da manhã: descubra os sabores da Delícias do Trigo em Monte Mor.'), component: Products });
function Products() { return <><PageIntro eyebrow="FEITOS PARA ENCANTAR" title="Nossas delícias." text="Do primeiro café à pausa da tarde, um sabor especial para cada momento." /><ProductSection full /></>; }
