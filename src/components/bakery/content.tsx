import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, Wheat, Heart, Coffee, Clock3, MapPin, Phone, MessageCircle, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { bakery, mapEmbed, mapUrl } from '@/lib/bakery';
import hero from '@/assets/bakery-hero.jpg';
import interior from '@/assets/bakery-interior.jpg';
import bread from '@/assets/bread.jpg';
import pastry from '@/assets/pastry.jpg';
import coffee from '@/assets/coffee.jpg';
import savory from '@/assets/savory.jpg';

export const products = [
  { name: 'Pães artesanais', category: 'Panificação', image: bread, text: 'Cascas crocantes, miolos macios e o sabor de um pão feito com carinho.', items: ['Pães rústicos', 'Baguetes', 'Pães para o dia a dia'] },
  { name: 'Confeitaria fina', category: 'Confeitaria', image: pastry, text: 'Pequenos encantos e sabores especiais para adoçar os seus momentos.', items: ['Tortas e doces', 'Bolos', 'Sobremesas'] },
  { name: 'Cafés especiais', category: 'Cafeteria', image: coffee, text: 'Uma pausa bem merecida, com o aroma e o aconchego de um bom café.', items: ['Café espresso', 'Cappuccino', 'Café da manhã'] },
  { name: 'Salgados & lanches', category: 'Salgados', image: savory, text: 'A companhia perfeita para o seu café ou para a fome de qualquer hora.', items: ['Salgados assados', 'Pão de queijo', 'Lanches'] },
];
const photos = [{ image: interior, title: 'Um espaço para se sentir em casa', category: 'Ambiente' }, ...products.map(p => ({ image: p.image, title: p.name, category: 'Produtos' })), { image: hero, title: 'O carinho começa no preparo', category: 'Produtos' }];

export function HomeHero() {
  return <section className="home-hero">
    <img className="hero-photo" src={hero} alt="Pães artesanais dourados e croissants sobre uma bancada de madeira" width={1920} height={1024} fetchPriority="high" />
    <div className="hero-shade" />
    <div className="container hero-content">
      <span className="eyebrow hero-eyebrow"><span /> FEITO COM CARINHO. SERVIDO COM AFETO.</span>
      <h1>Delícias do Trigo<span>Seu dia começa<br />com boas delícias.</span></h1>
      <p>O cheirinho do pão, o café fresquinho e um lugar<br className="desktop-break" /> para chamar de seu. Seja bem-vindo à nossa mesa.</p>
      <div className="hero-actions"><Button asChild size="lg"><Link to="/produtos">Conheça nossas delícias <ArrowUpRight /></Link></Button><Button asChild variant="ghost" size="lg" className="hero-visit"><Link to="/contato"><MapPin /> Venha nos visitar</Link></Button></div>
      <div className="hero-footnote"><Wheat size={17} /><span>Ingredientes que encantam. Momentos que ficam.</span></div>
    </div>
    <span className="hero-side-note">DO FORNO PARA A SUA MESA</span>
  </section>;
}
export function ValuesStrip() {
  return <div className="values-strip"><div className="container values-grid"><span><Wheat /> Sabor artesanal</span><i /><span><Heart /> Feito com carinho</span><i /><span><Coffee /> Seu momento de pausa</span><i /><span><MapPin /> No coração de Monte Mor</span></div></div>;
}
export function ProductSection({ full = false }: { full?: boolean }) {
  return <section className={`section products-section ${full ? 'products-full' : ''}`}><div className="container">
    {!full && <div className="section-heading"><div><span className="eyebrow">DA NOSSA COZINHA PARA VOCÊ</span><h2>Uma delícia para cada momento.</h2></div><Button variant="link" asChild className="section-link"><Link to="/produtos">Ver todos os produtos <ArrowUpRight /></Link></Button></div>}
    <div className="products-grid">{products.map((p, i) => <Link className="product-item group" to="/produtos" hash={`produto-${i}`} key={p.name} id={`produto-${i}`}><div className="product-image"><img src={p.image} alt={p.name} loading="lazy" width={768} height={768} /><span className="product-image-arrow"><ArrowUpRight size={20} /></span></div><div className="product-copy"><span className="tiny-label">{p.category}</span><h3>{p.name}</h3><p>{p.text}</p>{full && <div className="product-details">{p.items.map(item => <span key={item}>{item}</span>)}</div>}</div></Link>)}</div>
    {full && <div className="breakfast-band"><Coffee size={34} /><div><h3>O café da manhã merece um tempo só seu.</h3><p>Um café especial, pães e boas companhias. Comece o dia à nossa mesa.</p></div><Button asChild><Link to="/contato">Venha tomar um café <ArrowRight /></Link></Button></div>}
  </div></section>;
}
export function AboutSection({ full = false }: { full?: boolean }) {
  return <section className="section about-section"><div className="container about-grid"><div className="about-photo"><img src={interior} alt="Ambiente ilustrativo de uma padaria acolhedora com mesas, plantas e vitrine de pães" loading="lazy" width={1536} height={1024} /><span className="photo-caption">UM CONVITE PARA FICAR MAIS UM POUQUINHO</span></div><div className="about-copy"><span className="eyebrow">MAIS QUE UMA PADARIA</span><h2>Um lugar de encontros.<br /><em>Um sabor de casa.</em></h2><p>Acreditamos que os melhores momentos começam com coisas simples: um pão quentinho, um café bem passado e uma boa conversa.</p><p>Na Delícias do Trigo, cada detalhe é um convite para desacelerar. Um espaço acolhedor no Jardim Paviotti, em Monte Mor, para o seu café da manhã, a pausa da tarde ou aquele encontro especial.</p>{full ? <p>Do artesanal à confeitaria, do doce ao salgado, nossa variedade é pensada para acompanhar os diferentes momentos do seu dia. A nossa mesa está esperando por você.</p> : <Button variant="link" asChild className="about-link"><Link to="/sobre">Conheça a nossa padaria <ArrowUpRight /></Link></Button>}<div className="about-signature"><Wheat size={27} /><span>Com carinho, Delícias do Trigo.</span></div></div></div></section>;
}
export function GallerySection({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState<number | null>(null);
  const visible = (full ? photos : photos.slice(0, 4)).filter(p => filter === 'Todos' || p.category === filter);
  const active = selected === null ? null : visible[selected];
  return <section className="section gallery-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">UM POUQUINHO DO NOSSO UNIVERSO</span><h2>Sabores que dão vontade de ficar.</h2></div>{!full && <Button asChild variant="link"><Link to="/galeria">Explore a galeria <ArrowUpRight /></Link></Button>}</div>
    {full && <div className="gallery-filters">{['Todos', 'Ambiente', 'Produtos'].map(f => <Button key={f} variant={f === filter ? 'default' : 'outline'} onClick={() => setFilter(f)}>{f}</Button>)}</div>}
    <div className={`gallery-grid ${full ? 'gallery-full' : ''}`}>{visible.map((photo, i) => <Button className="gallery-photo" variant="ghost" key={photo.title} onClick={() => setSelected(i)} aria-label={`Ampliar: ${photo.title}`}><img src={photo.image} alt={photo.title} width={768} height={768} loading="lazy" /><span><span>{photo.title}</span><Expand size={18} /></span></Button>)}</div><p className="illustration-note">Imagens ilustrativas do ambiente e dos produtos.</p>
    <Dialog open={active !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="gallery-dialog"><DialogTitle>{active?.title}</DialogTitle><DialogDescription>Imagem ilustrativa · Delícias do Trigo</DialogDescription>{active && <img src={active.image} alt={active.title} width={1200} height={900} />}<div className="lightbox-controls"><Button variant="outline" size="icon" aria-label="Foto anterior" onClick={() => setSelected(i => ((i ?? 0) - 1 + visible.length) % visible.length)}><ChevronLeft /></Button><span>{(selected ?? 0) + 1} / {visible.length}</span><Button variant="outline" size="icon" aria-label="Próxima foto" onClick={() => setSelected(i => ((i ?? 0) + 1) % visible.length)}><ChevronRight /></Button></div></DialogContent></Dialog>
  </div></section>;
}
export function ContactSection({ full = false }: { full?: boolean }) {
  return <section className="section contact-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">A GENTE TE ESPERA AQUI</span><h2>Tem sempre um lugar para você.</h2></div></div><div className="contact-grid"><div className="contact-details"><div className="contact-row"><MapPin /><div><h3>Nosso endereço</h3><p>{bakery.street}<br />{bakery.neighborhood} · {bakery.city}<br />CEP {bakery.postalCode}</p><a className="text-link" href={mapUrl} target="_blank" rel="noopener noreferrer">Traçar minha rota <ArrowUpRight size={15} /></a></div></div><div className="contact-row"><Clock3 /><div><h3>Horário de funcionamento</h3><p>Das {bakery.hours}</p></div></div><div className="contact-row"><Phone /><div><h3>Fale com a gente</h3><a href={bakery.phoneHref}>{bakery.phone}</a></div></div><Button asChild size="lg" className="whatsapp-contact"><a href={bakery.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Conversar pelo WhatsApp <ArrowUpRight /></a></Button>{full && <p className="contact-note">Para confirmar a disponibilidade dos produtos e o funcionamento em feriados, fale com a padaria. Se o WhatsApp não estiver disponível neste número, ligue para nós.</p>}</div><div className="map-frame"><iframe title="Localização da Delícias do Trigo em Monte Mor" src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={mapUrl} target="_blank" rel="noopener noreferrer">Delícias do Trigo · Monte Mor <ArrowUpRight size={16} /></a></div></div></div></section>;
}
export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className="page-intro"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div><Wheat className="intro-wheat" strokeWidth={0.6} /></section>; }
