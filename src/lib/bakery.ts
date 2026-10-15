export const bakery = {
  name: 'Delícias do Trigo',
  street: 'R. Anardino José Machado, 40',
  neighborhood: 'Jardim Paviotti',
  city: 'Monte Mor - SP',
  postalCode: '13190-000',
  address: 'R. Anardino José Machado, 40 - Jardim Paviotti, Monte Mor - SP, 13190-000',
  hours: '6h00 às 19h00',
  phone: '(19) 3979-8631',
  phoneHref: 'tel:+551939798631',
  whatsapp: 'https://wa.me/551939798631?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Del%C3%ADcias%20do%20Trigo.',
};
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(bakery.address)}`;
export const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(bakery.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Delícias do Trigo` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Delícias do Trigo` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
