// export const validation = (values) => {
//     const errorMsg = {};

//     if (values.name === '') {
//         errorMsg.name = 'Por favor, insira o nome completo'
//     }

//     if (!values.email.includes('@')) {
//         errorMsg.email = 'Seu email deve conter um "@"'
//     }
//     if (values.email === '') {
//         errorMsg.email = 'Por favor, insira um email'
//     }

//     if (values.password.length < 6) {
//         errorMsg.password = 'A senha deve conter seis ou mais caracteres'
//     }
//     if (values.password === '') {
//         errorMsg.password = 'Por favor, insira uma senha válida'
//     }
//     if (values.role === '') {
//         errorMsg.role = 'Por favor, selecione seu cargo'
//     }

//     return errorMsg;
// }