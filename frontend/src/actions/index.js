export const userBuilder = s=>{
    return{
        type:'USERNAME',
        payload:s
    }
}

export const passwordBuilder = input=>{
    return{
        type:'PASSWORD',
        payload:input
    }
}