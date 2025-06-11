import { $fetch, fetch, mockFn, setup } from '@nuxt/test-utils'
import { fileURLToPath } from 'node:url'
import { describe, expect, it, vi } from 'vitest'

await setup({
  rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
})

describe('ssr', async () => {
  it('redirects to the login page', async () => {
    const res = await fetch('/protected', { redirect: 'manual' })
    expect(res.headers.get('location')).toBe('/login?redirect=/protected')
  })

  it('respects custom elements', async () => {
    const html = await $fetch('/login')
    expect(html).toContain('<hanko-auth></hanko-auth>')
  })

  it('renders page when logged in', async () => {
    vi.fn
  })
})
