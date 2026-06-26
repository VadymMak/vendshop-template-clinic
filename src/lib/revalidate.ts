import { revalidatePath, revalidateTag } from 'next/cache';

const LOCALES = ['en', 'sk', 'de', 'cs'];

export function revalidateStorefront() {
  revalidatePath('/', 'layout');
  for (const locale of LOCALES) {
    revalidatePath(`/${locale}`);
  }
  revalidateTag('products');
}

export function revalidateCatalog() {
  revalidateStorefront();
  for (const locale of LOCALES) {
    revalidatePath(`/${locale}/catalog`);
  }
}
