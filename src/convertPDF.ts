import { Canvas, createCanvas } from '@napi-rs/canvas';
import appRoot from 'app-root-path';
import { readFile } from 'node:fs/promises';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

interface CanvasAndContext {
  canvas: Canvas | null;
  context: CanvasRenderingContext2D | null;
}

class CanvasFactory {
  create(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid canvas size');
    }
    const canvas = createCanvas(width, height);
    return {
      canvas,
      context: canvas.getContext('2d') as unknown as CanvasRenderingContext2D,
    };
  }

  reset(canvasAndContext: CanvasAndContext, width: number, height: number) {
    if (!canvasAndContext.canvas) {
      throw new Error('Canvas is not specified');
    }
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid canvas size');
    }
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }

  destroy(canvasAndContext: CanvasAndContext) {
    if (!canvasAndContext.canvas) {
      throw new Error('Canvas is not specified');
    }
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
}

export async function convertPDF(src: string, frontOnly = false) {
  const canvasFactory = new CanvasFactory();

  const pdfDocument = await getDocument({
    data: await readFile(src).then((res) => new Uint8Array(res)),
    cMapUrl: appRoot.resolve('/node_modules/pdfjs-dist/cmaps'),
    cMapPacked: true,
    standardFontDataUrl: appRoot.resolve(
      '/node_modules/pdfjs-dist/standard_fonts',
    ),
    canvasFactory,
  }).promise;

  const canvases = [];

  for (let i = 1; i <= pdfDocument.numPages; ++i) {
    const page = await pdfDocument.getPage(i);
    const viewport = page.getViewport({ scale: 1.0 });
    const { canvas, context } = canvasFactory.create(
      viewport.width,
      viewport.height,
    );

    await page.render({
      canvasContext: context,
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
