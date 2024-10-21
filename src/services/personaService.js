import axios from 'axios';

const API_URL = 'http://localhost:8080/api/personas'; // Cambia esto por tu URL real

class PersonaService {
  async addPersona(persona) {
    return await axios.post(API_URL, persona);
  }

  // Nuevo método para buscar personas
  async getPersonasBySearch(searchTerm) {
    return await axios.get(`${API_URL}?search=${searchTerm}`);
  }
}

export default new PersonaService();
