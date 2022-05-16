import Script from 'next/script'

interface MercadoPagoCheckout {
  open: () => void
}

declare class MercadoPago {
  checkout(arg0: { preference: { id: string } }): MercadoPagoCheckout
  constructor(public_key: string)
}

export class CheckoutFactory {
  static mercadoPago: MercadoPago //singleton

  static init() {
    if (this.mercadoPago) return

    CheckoutFactory.mercadoPago = new MercadoPago(
      'TEST-39e0bfdb-ade6-48c3-923f-f1cc71e1041e'
    )
  }

  private _checkout!: MercadoPagoCheckout

  public create() {
    this._checkout = CheckoutFactory.mercadoPago.checkout({
      preference: {
        id: 'teste',
      },
    })
  }

  public open() {
    if (!this._checkout) return

    this._checkout.open()
  }
}

export const MercadoPagoSDK = () => {
  return (
    <Script
      id="mercado-pago"
      src="https://sdk.mercadopago.com/js/v2"
      strategy="lazyOnload"
      onLoad={() => CheckoutFactory.init()}
      onError={() => console.error('Failed to load payment method')}
    />
  )
}
