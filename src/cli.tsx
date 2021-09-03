#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import Creat from "./creat";
import Help from "./help";
import { Command } from "commander";

const program = new Command();


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

program.version('0.0.1','-v','output the current version')
program.parse(process.argv);
