import Dexie from 'dexie'

export class AppDatabase extends Dexie {
  contacts: Dexie.Table<IContact, number> // number = type of the primkey
  constructor () {
    super('MyAppDatabase')
    this.version(1).stores({
      contacts: '++id, first, last',
      // other tables goes here...
    })

    this.version(2).stores({
      contacts: "++id,first,last,birthdate"
    }).upgrade(trans => {
      const db = trans.db as AppDatabase
      return db.contacts.toCollection().modify(contact => {
        contact.birthdate = new Date()
      })
    })

    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.contacts = this.table('contacts')
  }
}

export interface IContact {
  id?: number
  first: string
  last: string
  birthdate: Date
}
