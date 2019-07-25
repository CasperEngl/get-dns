import fs from 'fs-extra';
import prompts from 'prompts';
import * as dns from 'native-dns';

const question = dns.Question({
  name: 'www.google.com',
  type: 'A',
});

(async () => {
  const questions = [
    {
      type: 'text',
      name: 'path',
      message: 'Path to domain list',
      validate: (path: string) => (fs.existsSync(path) ? true : 'Filen eksisterer ikke.'),
    },
    {
      type: 'multiselect',
      name: 'types',
      message: 'Pick data types',
      choices: [
        { title: 'Name', value: true, selected: true },
        { title: 'A', value: true, selected: true },
        { title: 'NS', value: true },
        { title: 'MX', value: true },
      ],
      max: 2,
      hint: '- Space to select. Return to submit',
    },
  ];

  const response = await prompts((questions as any));

  // const bar = new ProgressBar('[:bar] :percent :eta seconds remaining', {
  //   total: 100,
  //   complete: '=',
  //   incomplete: ' ',
  //   width: 30,
  // });
  // const timer = setInterval(() => {
  //   bar.tick();
  //   if (bar.complete) {
  //     clearInterval(timer);
  //   }
  // }, 100);
})();
