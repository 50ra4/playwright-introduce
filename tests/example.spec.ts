import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);

  await page.getByLabel('検索', { exact: true }).fill('playwright');
  await page.getByRole('button', { name: 'Google 検索' }).click();

  await expect(page).toHaveTitle(/playwright - Google/);

  const text = await page
    .getByRole('link', { name: 'テスト自動化 - Playwright' })
    .innerText();
  expect(text).toContain('ベストプラクティス');
});
