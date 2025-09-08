'use server';

import { cookies } from 'next/headers';

export async function storeRefreshToken(token: string) {
  const cookieStore = await cookies();
  return cookieStore.set('refreshToken', token);
}
