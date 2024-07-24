const [showPassword, setShowPassword] = useState(true)
const [isPassWordOk, setIsPassWordOk] = useState(false)
// const testIsPassWordOk = () => {
//     const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[_!]).{1,}$/;
//     const input = document.getElementById('inputPassword').value
//     if (input = '') {
//         console.log('ingrese una contrasena')
//     } else {
//         if (!regex.test(input)) {
//             console.log('porfavor ingrese una contrasena con mayuscula, minuscula, un numero y un caracter especial')
//         }
//         else (
//             setIsPassWordOk(true)

//         )
//     }
