import { StrictMode } from 'react';

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './app';

export function render(url: string) {
    return ReactDOMServer.renderToString(
        <StrictMode>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </StrictMode>,
    );
}
