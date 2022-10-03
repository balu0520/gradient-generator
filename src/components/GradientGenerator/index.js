import {Component} from 'react'
import {
  GenerateForm,
  GradientHeading,
  GradientPara,
  UnorderedList,
  GradientColorPara,
  ColorContainers,
  ColorContainer,
  SelectColorPara,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    directId: gradientDirectionsList[0].value,
    activeDirectionId: gradientDirectionsList[0].value,
    colorId1: '#8ae323',
    activeColorId1: '#8ae323',
    colorId2: '#014f7b',
    activeColorId2: '#014f7b',
  }

  onClickDirection = id => {
    this.setState({directId: id})
  }

  onChangeClrOne = event => {
    this.setState({colorId1: event.target.value})
  }

  onChangeClrTwo = event => {
    this.setState({colorId2: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {directId, colorId1, colorId2} = this.state
    this.setState({
      activeDirectionId: directId,
      activeColorId1: colorId1,
      activeColorId2: colorId2,
    })
  }

  render() {
    const {
      activeColorId1,
      activeColorId2,
      activeDirectionId,
      colorId1,
      colorId2,
      directId,
    } = this.state
    console.log(activeDirectionId)
    return (
      <GenerateForm
        onSubmit={this.onSubmitForm}
        colorOne={activeColorId1}
        colorTwo={activeColorId2}
        direction={activeDirectionId}
        data-testid="gradientGenerator"
      >
        <GradientHeading>Generate a CSS Color Gradient</GradientHeading>
        <GradientPara>Choose Direction</GradientPara>
        <UnorderedList>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionDetails={eachDirection}
              onClickDirection={this.onClickDirection}
              activeDirectionId1={directId}
            />
          ))}
        </UnorderedList>
        <GradientColorPara>Pick the Colors</GradientColorPara>
        <ColorContainers>
          <ColorContainer>
            <SelectColorPara>{colorId1}</SelectColorPara>
            <input
              type="color"
              value={colorId1}
              onChange={this.onChangeClrOne}
            />
          </ColorContainer>
          <ColorContainer>
            <SelectColorPara>{colorId2}</SelectColorPara>
            <input
              type="color"
              value={colorId2}
              onChange={this.onChangeClrTwo}
            />
          </ColorContainer>
        </ColorContainers>
        <GenerateButton type="submit">Generate</GenerateButton>
      </GenerateForm>
    )
  }
}

export default GradientGenerator
