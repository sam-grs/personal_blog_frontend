import { Slide, toast } from 'react-toastify'

type AlertProps = {
    mensagem: string
    tipo?: 'success' | 'error' | 'info'
}

export function Alert({ mensagem, tipo = 'success' }: AlertProps) {
    toast[tipo](`${mensagem}`, {
        position: 'bottom-left',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
    })
}
