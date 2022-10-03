// Write your code here
import {ListItem, SelectButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onClickDirection, activeDirectionId1} = props
  const {directionId, value, displayText} = directionDetails
  const res = value === activeDirectionId1
  const onClickDirection1 = event => {
    onClickDirection(event.target.value)
  }
  return (
    <ListItem key={directionId}>
      <SelectButton value={value} onClick={onClickDirection1} isActive={res}>
        {displayText}
      </SelectButton>
    </ListItem>
  )
}

export default GradientDirectionItem
