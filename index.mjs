//modulos externos
import chalk from 'chalk';
import inquirer from 'inquirer';
//modulos internos
import fs from 'fs';
import Account from './create_account.mjs';
import out from './out.mjs';
import deposit from './deposit.mjs';
import showAccountBalance from './show_account_balance.mjs';
import withdraw from './withdraw.mjs';

function menu() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ],
    },]).then((answer)=> {
        const action = answer['action'];
        if(action === 'Criar conta') {
            Account();
        }
        else if(action === 'Consultar saldo') {
            showAccountBalance();
        }
        else if(action === 'Depositar') {
            deposit();
        }
        else if(action === 'Sacar') {
            withdraw();
        }
        else if(action === 'Sair') {
            out(); 
        }
    }).catch((err)=> console.log(err))
}
menu();
export default menu