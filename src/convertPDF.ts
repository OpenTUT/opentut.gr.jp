import { createCanvas } from '@napi-rs/canvas';
import appRoot from 'app-root-path';
import { readFile } from 'node:fs/promises';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

export async function convertPDF(src: string, frontOnly = false) {
  const pdfDocument = await getDocument({
    data: await readFile(src).then((res) => new Uint8Array(res)),
    cMapUrl: appRoot.resolve('/node_modules/pdfjs-dist/cmaps/'),
    cMapPacked: true,
    standardFontDataUrl: appRoot.resolve(
      '/node_modules/pdfjs-dist/standard_fonts/',
    ),
  }).promise;

  const canvases = [];

  for (let i = 1; i <= pdfDocument.numPages; ++i) {
    const page = await pdfDocument.getPage(i);
    const viewport = page.getViewport({ scale: 1.0 });
    const canvas = createCanvas(viewport.width, viewport.height);

    await page.render({
      canvasContext: canvas.getContext(
        '2d',
      ) as unknown as CanvasRenderingContext2D,
      viewport,
    }).promise;
    canvases.push(canvas);
    page.cleanup();

    if (frontOnly) {
      break;
    }
  }

  return canvases;
}
