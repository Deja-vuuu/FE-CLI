#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import Creat from "./creat";
import Help from "./help";
import { Command } from "commander";

const program = new Command();
export function printUnknownCommand(cmdName: string) {
  const errorMsg = `命令 "${chalk.bold(cmdName)}" 不存在`;

  if (cmdName) {
     console.log('运行 ${chalk.bold('"ks --help"')} 查看可用命令');
     
  } else {
      program.outputHelp();
  }
}
export function handleError(err: Error | null | undefined) {
  if (err) {
      // Some error messages (esp. custom ones) might have `.` at the end already.
      console.log(  `Run CLI with $`,);
      
      // if (err.stack) {
      //     console.log(err.stack);
          
      // }
  }
  process.exit();
}


program.usage('[command] [command-options]')
.exitOverride(handleError)
.action((cmd)=>{
  // if(![
  // 'c','t'
  // ].includes(cmd)){
  //   console.log('gundan');
    
  //   process.exit();
  // }
 
})

program
.command('create <app-name>')
.alias('c')
.description('创建一个基于平台的新项目')
.option('-t, --typeName <typeName>', '基于哪个项目')
.action((name, options) => {
    console.log(name, options);
    render(<Creat name={name} options={options}/>);
    // create(name, options)
})
program
  .command("t")
  .description("test")
  .action((source, destination) => {
    console.log("test ");
  });
  program
  // 监听 --help 执行
  .on('--help', () => {
    // 新增说明信息
    render(<Help />);
  })

// program.version('0.0.1','-v','output the current version')
program.parse(process.argv);
