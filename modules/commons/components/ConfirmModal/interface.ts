import React from 'react'

export type ConfirmModalProps = {}

export type ConfirmModalRef = {
  openDialog: (props: OpenConfirmDialogType) => void
}

export type OpenConfirmDialogType = {
  describe: string
  onConfirm: () => void
}
