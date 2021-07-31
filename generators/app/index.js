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
      const argumentName = `${changeTo.pascalCase(command)} Name`;
      this.argument(argumentName, {required: true, type: String});
      const name = changeTo.camelCase(this.options[argumentName]);
      switch (command) {
        case 'navigation':
          this.generateNavigation(name);
          break;
        case 'screen':
          this.generateScreen(name);
          break;
        case 'service':
          this.generateService(name);
          break;
        case 'store':
          this.generateStore(name);
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

  /**
   * Generating navigation component
   * @param name
   */
  generateNavigation(name, path='navigations') {
    this.option('stack', {default: true});
    this.option('drawer', {default: false});
    let templateFileName = 'stack';
    if (this.options.drawer) {
      templateFileName = 'drawer';
    }
    const destination = this.destinationPath(`${path}/${name}.tsx`);
    this.creationLog('navigation', destination);
    this.fs.copyTpl(
      this.templatePath(`navigations/${templateFileName}.tsx`),
      destination,
      {
        name: changeTo.pascalCase(name),
      }
    );
    this.creationSuccessLog(destination);
  }

  /**
   * Generating screen component
   * @param name
   */
  generateScreen(name, path='screens') {
    const templateFileName = 'screens/index';
    const destination = this.destinationPath(`${path}/${name}.tsx`);
    this.creationLog('screen', destination);
    this.fs.copyTpl(
      this.templatePath(`${templateFileName}.tsx`),
      destination,
      {
        name: changeTo.pascalCase(name),
      }
    );
    this.creationSuccessLog(destination);
  }

  /**
   * Generating service
   * @param name
   */
  generateService(name, path='services') {
    this.option('url', {type: String, default: ''});
    const destination = this.destinationPath(`${path}/${name}Service.ts`);
    this.creationLog('service', destination);
    this.fs.copyTpl(
      this.templatePath(`service.ts`),
      destination,
      {
        name: changeTo.pascalCase(name),
        url: this.options.url
      }
    );
    this.creationSuccessLog(destination);
  }

  /**
   * Generating store
   * @param name
   */
  generateStore(name, path='stores') {
    const destination = this.destinationPath(`${path}/${name}Store.ts`);
    this.creationLog('store', destination);
    this.fs.copyTpl(
      this.templatePath(`store.ts`),
      destination,
      {
        name: changeTo.pascalCase(name),
      }
    );
    this.creationSuccessLog(destination, 'Jangan lupa tambahin di ./stores/index.ts yak.');
  }

  showExample() {
    this.log(yosay(chalk.red('Ga ngerti gue anjir!')));
  }

  creationLog(name, destination) {
    this.log(chalk.green('Bentar yak, gue bikinin ' + name + '-nya.'));
    this.log(chalk.yellow(`Nulis ke ${destination}`));
  }

  creationSuccessLog(destination, additionalNotes = '') {
    this.log(chalk.green('Udah jadi nih! 🚀'))
    this.log(chalk.green('👨🏻‍💻 Gua taro di ' + destination + ' yak. ' + additionalNotes));
    this.log(chalk.green('🏃🏻‍ Yo Geract! Jangan males ngoding!'));
  }
}

module.exports = class extends Londalo {
  exec() {
    this.main();
  }
};
