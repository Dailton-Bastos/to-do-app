import { uuid } from './helpers';

export const DEFAULT_TASK = [
  {
    id: uuid(),
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, repudiandae!',
    isFinished: false,
  },
  {
    id: uuid(),
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isFinished: false,
  },
  {
    id: uuid(),
    title: 'Lorem ipsum dolor sit amet, consectetur',
    isFinished: true,
  },
];
