import { PrimaryButton, Stack, StackItem, Text, TextField } from 'office-ui-fabric-react'
import * as React from 'react'
import { AppDatabase, IContact } from './db'

type State = {
  contacts: IContact[]
  first: string
  last: string
}

type Props = {
}

export class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      contacts: [],
      first: '',
      last: '',
    }
  }

  async componentDidMount() {
    const db  = new AppDatabase()
    const contacts = await db.contacts.toArray()
    this.setState({
      contacts,
    })
  }

  addToDatabase = async () => {
    const db  = new AppDatabase()
    const newContact = {
      first: this.state.first,
      last: this.state.last,
    }
    db.contacts.add(newContact)

    this.setState({
      contacts: [...this.state.contacts, newContact],
    })
  }

  render() {
    return (
      <div>
        <Stack>
          <StackItem align='center'>
            <Text variant='xxLarge' style={ { color: 'black', paddingTop: '20px' } }>Welcome!</Text>
            <PrimaryButton onClick={ this.addToDatabase }>Click to add to indexdb</PrimaryButton>
            <TextField label='First' value={ this.state.first } onChange={ (_ev, val) => this.setState({ first: val ?? '' }) } />
            <TextField label='Last' value={ this.state.last } onChange={ (_ev, val) => this.setState({ last: val ?? '' }) } />
            <pre>
              { JSON.stringify(this.state.contacts, undefined, '\t') }
            </pre>
          </StackItem>
        </Stack>
      </div>
    )
  }
}
