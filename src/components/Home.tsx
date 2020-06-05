import { Stack, StackItem } from 'office-ui-fabric-react/lib/Stack'
import { Text } from 'office-ui-fabric-react/lib/Text'
import * as React from 'react'

type State = {
}

type Props = {
}

export class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  onDocumentKeyDown = (keyEvent: React.KeyboardEvent) => {
    if (keyEvent.altKey && keyEvent.ctrlKey && keyEvent.key === 'd') {
      window.location.href = '/#/debugpanel'
    }
  }

  render() {
    return (
      <div onKeyDown={ this.onDocumentKeyDown } tabIndex={ 0 } >
        <Stack>
          <StackItem align='center'>
            <Text variant='xxLarge' style={ { color: 'black', paddingTop: '20px' } }>Welcome!</Text>
          </StackItem>
        </Stack>
      </div>
    )
  }
}
