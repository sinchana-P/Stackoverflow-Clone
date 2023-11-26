import axios from 'axios'

// AXIOS CUSTOM INSTANCE.
const API = axios.create({ baseURL: 'http://localhost:5000', })

// to send data to backend  // URL shd be same
export const signUp = (authData) => API.post('/user/signup', authData)
export const logIn = (authData) => API.post('/user/login', authData)

// url: /questions/Ask
export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)   

// url: /questions/get
export const getAllQuestions = () => API.get('/questions/get');
// as it is a get request, there will be no parameters

