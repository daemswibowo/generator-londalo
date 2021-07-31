const Generator = require('yeoman-generator');
const chalk = require("chalk");
const yosay = require("yosay");
const changeTo = require('change-case');

class Londalo extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('command', {required: false, type: String});
  }

  main() {
    if (this.options.command && this.options.command.includes('make:')) {
      const command = this.options.command.replace('make:', '');
      this.argument('name', {required: true, type: String});
      const name = changeTo.camelCase(this.options.name);
      switch (command) {
        case 'navigation':
          this.option('stack', {default: true});
          this.option('drawer', {default: false});
          let templateFileName = 'stack';
          if (this.options.drawer) {
            templateFileName = 'drawer';
          }
          var destination = this.destinationPath(`navigations/${name}.tsx`);
          this.log(chalk.green('Bentar yak, gue bikinin navigation-nya.'));
          this.log(chalk.yellow(`Nulis ke ${destination}`));
          this.fs.copyTpl(
            this.templatePath(`navigations/${templateFileName}.tsx`),
            destination,
            {
              name: changeTo.pascalCase(name),
            }
          );
          this.log(chalk.green('Udah jadi nih! 🚀'))
          this.log(chalk.green('👨🏻‍💻 Gua taro di ' + destination + '. Jangan males ngoding!'));
          break;
        case 'service':
          this.option('url', {type: String, default: ''});
          var destination = this.destinationPath(`services/${name}Service.ts`);
          this.log(chalk.green('Bentar yak, gue bikinin service-nya.'));
          this.log(chalk.yellow(`Nulis ke ${destination}`));
          this.fs.copyTpl(
            this.templatePath(`service.ts`),
            destination,
            {
              name: changeTo.pascalCase(name),
              url: this.options.url
            }
          );
          this.log(chalk.green('Udah jadi nih! 🚀'))
          this.log(chalk.green('👨🏻‍💻 Gua taro di ' + destination + '. Jangan males ngoding!'));
          break;
        case 'store':
          var destination = this.destinationPath(`stores/${name}Store.ts`);
          this.log(chalk.green('Bentar yak, gue bikinin store-nya.'));
          this.log(chalk.yellow(`Nulis ke ${destination}`));
          this.fs.copyTpl(
            this.templatePath(`store.ts`),
            destination,
            {
              name: changeTo.pascalCase(name),
            }
          );
          this.log(chalk.green('Udah jadi nih! 🚀'))
          this.log(chalk.green('👨🏻‍💻 Gua taro di ' + destination + '. Jangan lupa tambahin di ./stores/index.ts yak, dan jangan males ngoding!'));
          break;
        default:
          this.log(yosay(chalk.red('Ga ngerti gue anjir!')));
          break;
      }
    } else {
      // if there is no command
      this.showExample();
    }
  }

  showExample() {
    this.log(yosay(chalk.red('Ga ngerti gue anjir!')));
  }
}

module.exports = class extends Londalo {
  exec() {
    this.main();
  }
};
