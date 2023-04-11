/**
 * We want to be able to send nice React components
 * back as Discord messages, so we can custom build out
 * the responses.
 * 
 * However Discord won't take HTMl. A usual hack I've
 * done before is sending SVG with basic HTML inside,
 * and tricking it into displaying it as an 'image',
 * however Discord blocks all SVG as it could contain
 * hostile scripts.
 * 
 * This work around is way too much work, but basically
 * it renders React components as SVG in HTML, then
 * takes a screenshot of that HTML using
 * node-hmtl-to-image, which runs a browser to take
 * the image.
 */

// Packages
import { AttachmentBuilder } from 'discord.js';
import { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import nodeHtmlToImage from 'node-html-to-image';

const HTML_HEADER = (content: string) => (`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  </head>
  <body>
    ${content}
  </body>
</html>
`);

/**
 * Creates a sendable image from React components.
 *
 * @param {ReactElement<any, any>} component React Component.
 * @returns {Promise<AttachmentBuilder>} Sendable image.
 */
export const createImage = async (component: ReactElement<any, any>): Promise<AttachmentBuilder> => {
  const converted = renderToString(component as ReactElement<any, any>);

  const images = await nodeHtmlToImage({
    html: HTML_HEADER(converted),
    quality: 50,
    type: 'png',
    transparent: true,
    puppeteerArgs: {
      args: ['--no-sandbox'],
    },
    encoding: 'binary',
    selector: 'svg',
  });

  console.log(images);

  return new AttachmentBuilder(images as Buffer, {
    name: 'send-bot-attatchment.png',
  });
}
