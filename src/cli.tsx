#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import App from "./ui";
import { Command } from "commander";

const program = new Command();

program
  .option("-c, --clone", "ccccccccccc")
  .description("clone a repository into a newly created directory")
  .action((source, destination) => {
    render(<App />);
  });

program
  .command("t")
  .description("test")
  .action((source, destination) => {
    console.log("test ");
  });
program.version('0.0.1','-v','output the current version')
program.parse(process.argv);
