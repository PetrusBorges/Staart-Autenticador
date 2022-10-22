//styles
import { Container } from "./styles"

//imagens
import Danger from '../../../assets/images/x-circle.svg'
import Success from '../../../assets/images/check-circle.svg'

//react
import { useEffect } from "react"

//PropTypes
import PropTypes from 'prop-types'

export default function ToastMessager({ type, id, text, duration, onRemoveMessage }) {

  useEffect(() => {
    const timeOut = setTimeout(() => {
      onRemoveMessage(id)
    }, duration || 7000)

    return () => {
      clearTimeout(timeOut)
    }
  }, [id, duration, onRemoveMessage])

  function handleRemoveToast() {
    onRemoveMessage(id)
  }

  return (
    <Container
      type={type}
      tabIndex={0}
      role="button"
      onClick={handleRemoveToast}
    >
      {type === 'danger' && <img src={Danger} alt="Danger" />}
      {type === 'success' && <img src={Success} alt="Success" />}
      <strong>{text}</strong>
    </Container>
  )
}

ToastMessager.propTypes = {
  type: PropTypes.oneOf(['success', 'danger']),
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onRemoveMessage: PropTypes.func.isRequired,
}
