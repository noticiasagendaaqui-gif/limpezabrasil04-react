
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Notification } from '../components/UI/Notification'

type NotificationType = 'success' | 'error' | 'warning' | 'info'

interface NotificationData {
  id: string
  type: NotificationType
  message: string
}

interface NotificationContextType {
  showNotification: (type: NotificationType, message: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

interface NotificationProviderProps {
  children: ReactNode
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationData[]>([])

  const showNotification = (type: NotificationType, message: string) => {
    const id = Date.now().toString()
    const notification: NotificationData = { id, type, message }
    
    setNotifications(prev => [...prev, notification])
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 5000)
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            type={notification.type}
            message={notification.message}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  )
}
