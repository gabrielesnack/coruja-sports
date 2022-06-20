const listStatus = [
  { value: '1', label: 'Aguardando pagamento' },
  { value: '2', label: 'Pagamento confirmado' },
  { value: '3', label: 'Pedido em análise' },
  { value: '4', label: 'Pedido em separação' },
  { value: '5', label: 'Pedido em transporte' },
  { value: '6', label: 'Pedido finalizado' },
  { value: '7', label: 'Cancelamento solicitado' },
  { value: '8', label: 'Cancelamento confirmado' },
  { value: '9', label: 'Devolução solicitada' },
  { value: '10', label: 'Devolução realizada' },
]

export const useStatus = () => {
  return {
    listStatus,
  }
}

export const isDeliveringOrder = (value: string | number) => '5' == value
export const isRequestingCancel = (value: string | number) => '7' == value
export const isCancelled = (value: string | number) => '8' == value
