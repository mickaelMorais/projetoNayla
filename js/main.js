function mostrarSenha1() {
    var inputPass = document.getElementById('senha1')
    var btnShowPass = document.getElementById('btn-senha1')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}
function mostrarSenha2() {
    var inputPass = document.getElementById('senha2')
    var btnShowPass = document.getElementById('btn-senha2')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}
document.getElementById('cpf').addEventListener('input',(e) => {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '')
.replace(/(\d{3})(\d)/, '$1.$2')
.replace(/(\d{3})(\d)/, '$1.$2')
.replace(/(\d{3})(\d)/, '$1-$2')
.replace(/(-\d{2})\d+?$/, '$1');
    e.target.value = cpfPattern;
});
const profssional = document.getElementById('profissional')
const paciente = document.getElementById('paciente')
let M = document.getElementById('M')
let P = document.getElementById('P')
function profissionalF(){
    profissional.classList.replace('nSelecionado', 'selecionado')
    paciente.classList.replace('selecionado','nSelecionado')
    M.classList.replace('none', 'block')
    P.classList.replace('block', 'none')
    
}
function pacienteF(){
    paciente.classList.replace('nSelecionado', 'selecionado')
    profissional.classList.replace('selecionado','nSelecionado')
    P.classList.replace('none', 'block')
    M.classList.replace('block', 'none')
}