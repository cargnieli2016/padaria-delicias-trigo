import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, AboutSection, ValuesStrip, ContactSection } from '@/components/bakery/content';
import { pageHead } from '@/lib/bakery';
export const Route = createFileRoute('/sobre')({ head: () => pageHead('Nossa padaria', 'Um lugar de encontros e um sabor de casa. Conheça o espaço acolhedor da Delícias do Trigo, no Jardim Paviotti em Monte Mor.'), component: About });
function About() { return <><PageIntro eyebrow="PRAZER, SOMOS A DELÍCIAS DO TRIGO" title="Acolher também é o nosso ingrediente." text="Pão quentinho, uma boa conversa e o carinho de receber você." /><AboutSection full /><ValuesStrip /><ContactSection /></>; }
