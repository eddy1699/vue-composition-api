import axios from 'axios'
import { ref } from 'vue'
const useUsers = ()=>{
    const isLoading = ref(true)
    const currentPage = ref(1)
    const users = ref([])
    const errorMessage = ref()
    const getUsers=async(page=1)=>{
    if (page <= 0) page = 1
    isLoading.value = true
    const {data} = await axios.get('https://reqres.in/api/users', {
      params: { page }
    })

    if (data.data.length > 0) {
      users.value = data.data
      console.log(users)
      currentPage.value = page,
      errorMessage.value=null
    } else if (currentPage.value > 0) {
      errorMessage.value = 'No hay mas usuarios'
    }
// console.log(users)
    isLoading.value = false
}
getUsers()

    return{
        users,
      isLoading,
      currentPage,
      errorMessage,
      nextPage:()=>getUsers(currentPage.value+1),
      previousPage:()=>getUsers(currentPage.value-1)
    }
}

export default useUsers