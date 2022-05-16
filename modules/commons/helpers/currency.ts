export const toCurrencyBRL = (val: number) =>
  val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
