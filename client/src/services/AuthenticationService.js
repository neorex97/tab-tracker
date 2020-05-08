import Api from '@/services/Api'
export default {
    users (credentials) {
      return Api().post('users', credentials)  
    }
}


