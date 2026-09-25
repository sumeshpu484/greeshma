import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload';

/**
 * Tells the Next.js frontend to drop its cached fetch for `tag` as soon as a
 * document changes, so admin edits show up on the live site within seconds
 * instead of waiting for the hourly ISR revalidation window.
 */
function triggerRevalidate(tag: string) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return; // not configured locally - fine, ISR still revalidates hourly

  const url = `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/revalidate`;
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-revalidate-secret': secret },
    body: JSON.stringify({ tag }),
  }).catch((err) => {
    console.warn(`Revalidation request failed for tag "${tag}":`, err.message);
  });
}

export function revalidateOnChange(tag: string): CollectionAfterChangeHook {
  return () => {
    triggerRevalidate(tag);
  };
}

export function revalidateOnDelete(tag: string): CollectionAfterDeleteHook {
  return () => {
    triggerRevalidate(tag);
  };
}
