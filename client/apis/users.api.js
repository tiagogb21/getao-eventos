import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
class UsersService {
  constructor({ url = 'http://localhost:3000', timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(fullname, email, password) {
    const params = {
      fullname,
      email,
      password,
    };

    return this.http.get('/', { params });
  }
}

export default UsersService;
