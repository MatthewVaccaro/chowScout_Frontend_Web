export function changeHandler(e, state, setState){
    setState({...state, [e.target.name]: e.target.value})
}