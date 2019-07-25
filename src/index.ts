import fs from 'fs-extra';
import prompts from 'prompts';
import ProgressBar from 'progress';

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

  console.log(response); // => { value: 24 }

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
