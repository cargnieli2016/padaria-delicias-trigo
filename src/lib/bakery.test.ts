import { describe, it, expect } from 'vitest';
import { bakery, mapUrl } from './bakery';
describe('Informações fornecidas pela padaria', () => {
  it('mantém o endereço informado no mapa', () => { expect(bakery.address).toBe('R. Anardino José Machado, 50 - Jardim Paviotti, Monte Mor - SP, 13190-000'); expect(new URL(mapUrl).searchParams.get('query')).toBe(bakery.address); });
  it('mostra o horário sem presumir dias de abertura', () => { expect(bakery.hours).toBe('6h00 às 19h00'); });
  it('usa o telefone informado nas ações de contato', () => { expect(bakery.phoneHref).toBe('tel:+551939798631'); expect(new URL(bakery.whatsapp).pathname).toBe('/551939798631'); });
});
