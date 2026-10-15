import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ContactSection } from '@/components/bakery/content';
import { pageHead } from '@/lib/bakery';
export const Route = createFileRoute('/contato')({ head: () => pageHead('Contato, horários e localização', 'Visite a Delícias do Trigo na R. Anardino José Machado, 50, Jardim Paviotti, Monte Mor. Das 6h às 19h. Telefone: (19) 3979-8631.'), component: Contact });
function Contact() { return <><PageIntro eyebrow="VAMOS NOS ENCONTRAR?" title="A nossa mesa está te esperando." text="Venha tomar um café, buscar o pão do dia ou simplesmente fazer uma pausa." /><ContactSection full /></>; }
