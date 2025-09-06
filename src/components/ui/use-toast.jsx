// Adapted from https://ui.shadcn.com/docs/components/toast
import { useState, useEffect, createContext, useContext } from 'react'

const TOAST_TIMEOUT = 3000
const ToastContext = createContext({})

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, duration = TOAST_TIMEOUT }) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prevToasts) => [...prevToasts, { id, title, description, duration }])
    return id
  }

  const dismiss = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

const Toast = ({ toast, dismiss }) => {
  const { id, title, description, duration } = toast

  useEffect(() => {
    if (!duration) return

    const timeoutId = setTimeout(() => {
      dismiss(id)
    }, duration)

    return () => clearTimeout(timeoutId)
  }, [id, duration, dismiss])

  return (
    <div
      className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm w-full pointer-events-auto"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {title && <h4 className="font-medium text-gray-900">{title}</h4>}
          {description && <div className="mt-1 text-sm text-gray-500">{description}</div>}
        </div>
        <button
          onClick={() => dismiss(id)}
          className="ml-4 text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <span className="sr-only">Закрыть</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

const ToastContainer = ({ toasts, dismiss }) => {
  return (
    <div className="fixed bottom-0 right-0 p-4 max-h-screen overflow-hidden pointer-events-none z-50">
      <div className="flex flex-col space-y-2">
        {toasts.map((toast) => (
          <div key={toast.id} className="transform transition-all duration-300 ease-in-out">
            <Toast toast={toast} dismiss={dismiss} />
          </div>
        ))}
      </div>
    </div>
  )
}
