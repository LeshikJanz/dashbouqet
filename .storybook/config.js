import { configure } from '@kadira/storybook';

function loadStories() {
  const storiesContext = require.context('src', true, /(shared|views|)\/.+\.(js|jsx)$/);
  const globalStoriesContext = require.context('src', true, /\.storybook\.(js|jsx)$/);

  [storiesContext, globalStoriesContext]
    .forEach((context) => context.keys().sort().forEach(context));
}

configure(loadStories, module);
