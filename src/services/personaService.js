import axios from 'axios';

const API_URL = 'http://localhost:8080/api/personas'; // Cambia esto por tu URL real

class PersonaService {
  async addPersona(persona) {
    return await axios.post(API_URL, persona);
  }
}

export default new PersonaService();
