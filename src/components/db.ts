import Dexie from 'dexie'

export class AppDatabase extends Dexie {
  contacts: Dexie.Table<IContact, number> // number = type of the primkey
  constructor () {
    super('MyAppDatabase')
    this.version(1).stores({
      contacts: '++id, first, last',
      // other tables goes here...
    })
    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.contacts = this.table('contacts')
  }
}

export interface IContact {
  id?: number,
  first: string,
  last: string
}
