//styles
import { StyledFooter } from './styles'

//PropTypes
import PropTypes from 'prop-types'

export default function Footer({ children }) {
  return (
    <StyledFooter>
      {children}
    </StyledFooter>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
