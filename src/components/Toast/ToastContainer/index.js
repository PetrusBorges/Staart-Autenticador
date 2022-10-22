//styles
import { Container } from './styles'

//coponents
import ToastMessager from '../ToastMessager'

//utils
import { toastEventManager } from '../../../utils/toast'

//react
import { useState, useEffect, useCallback } from 'react'

export default function ToastContainer() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ])
    }

    toastEventManager.on('addtoast', handleAddToast)

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast)
    }
  }, [])

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) => prevState.filter(
      (message) => message.id !== id,
      ))
  }, [])

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessager
          key={message.id}
          type={message.type}
          id={message.id}
          text={message.text}
          duration={message.duration}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  )
}
