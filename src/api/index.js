const instance = this.$axios.create({
    baseURL: process.env.VUE_APP_API_URL,
})

export {
    instance
}