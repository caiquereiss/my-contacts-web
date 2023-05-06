import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/6a73b2c9-b617-41c9-877b-9581590aeecb?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClient.get('/contacts', contact);
  }
}

export default new ContactsService();
// http://localhost:3001
