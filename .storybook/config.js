import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/index.js');
    require('../stories/health-core/index.js');
    require('../stories/notes/index.js');
    require('../stories/yaspa/index.js');
}

configure(loadStories, module);
