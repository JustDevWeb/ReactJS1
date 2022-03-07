import moment from 'moment'


export const getTime = ()=>{
    return moment().format("HH:mm")
};