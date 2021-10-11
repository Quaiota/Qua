import styled from '@emotion/styled'

interface ISpacer {
  horizontalSpace?: boolean
  size: string | number
}

const Spacer = styled.div<ISpacer>`
  padding-left: ${(props) => props.horizontalSpace && props.size};
  display: ${(props) => (props.horizontalSpace ? 'inline-block' : 'block')};
  padding-top: ${(props) => !props.horizontalSpace && props.size};
`
export default Spacer
