import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const createToast = (message: string, color: string, duration?: number, position?: any, gravity?: any) => {
    Toastify({
        text: message,
        gravity: gravity ?? "top",
        position: position ?? "right",
        style: {
            background: color,
        },
        duration: duration || 3000,
        // oldestFirst: false,
    }).showToast()
}

export const errorToast = (message: string, duration?: number) => {
    createToast(message, "#ff5f6d", duration)
}
export const successToast = (message: string, duration?: number) => {
    createToast(message, "#00b09b", duration)
}

export const warningToast = (message: string, duration?: number) => {
    createToast(message, "#E2AB07", duration)
}