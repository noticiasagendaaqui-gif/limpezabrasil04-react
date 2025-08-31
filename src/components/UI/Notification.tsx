
import React from 'react'
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from 'lucide-react'

type NotificationType = 'success' | 'error' | 'warning' | 'info'

interface NotificationProps {
  type: NotificationType
  message: string
  onClose: () => void
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info
}

const colors = {
  success: 'bg-green-600 text-white',
  error: 'bg-red-600 text-white',
  warning: 'bg-yellow-600 text-white',
  info: 'bg-blue-600 text-white'
}

export const Notification: React.FC<NotificationProps> = ({ type, message, onClose }) => {
  const Icon = icons[type]

  return (
    <div className={`notification ${colors[type]} flex items-center p-4 rounded-lg shadow-lg max-w-md animate-fade-in-up`}>
      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-3 text-white hover:text-gray-200 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
