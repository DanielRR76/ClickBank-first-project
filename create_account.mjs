import chalk from "chalk";
import inquirer from "inquirer";
import fs from "fs";
import menu from './index.mjs';
import checkAccount from "./checkaccount.mjs";

function Account(){
    console.log(chalk.bgYellow.red("Obrigado por escolher o nosso ClikBank!"));
    console.log(chalk.bgGreen("Criando conta..."));
    console.log(chalk.blue("Defina as informações da sua conta"));
    createAccount();
}

function createAccount(){
    inquirer.prompt([{
        name: 'name',
        message: 'Defina um nome para sua conta:',
    },{
        name: 'cpf',
        message: 'Defina um CPF para sua conta(somente numeros):',
        validate: (value) => {
            if(value.length === 11){
                return true;
            }else {
                return 'CPF deve ter 11 digitos';
            }
        }
    },{
        name: 'cellphone',
        message: 'Defina um telefone para sua conta(somente numeros):',
        validate: (value) => {
            if(value.length === 11){
                return true;
            }
             else {
                return 'Telefone deve ter 11 digitos';
            }
            
        }

    },{
        name: 'password',
        message: 'Defina uma senha para sua conta:',
    }]).then((answers) => {
        var name = answers['name'];
        var cpf = answers['cpf'];
        var cellphone = answers['cellphone'];
        var password = answers['password'];
        console.log(`Seu nome é ${name}, seu CPF é ${cpf}, seu telefone é ${cellphone} e sua senha é ${password}`);
        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts');
        }
        if(checkAccount(name)){
            console.log(chalk.bgRed.black('Esta conta ja existe, escolha outro nome'));
            return createAccount();
        }
        fs.writeFileSync(`accounts/${name}.json`, '{"balance": 0}', (err) => {
            console.log(err);
        })
        console.log(chalk.bgGreen.black('Conta criada com sucesso'));
        menu();
    }).catch((err) => {
        console.log(err);
    })
}

export default Account;