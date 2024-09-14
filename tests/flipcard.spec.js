// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://kkeeth.github.io/riot-flipcard/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Riot Flipcard/);
});

test('Flip button about the first block', async ({ page }) => {
  await page.goto('https://kkeeth.github.io/riot-flipcard/');

  // flip card front -> back
  await page.getByRole('button', { name: 'Flip' }).click();
  await expect(page.getByRole('heading', { name: 'I\'m Dizzy' })).toBeVisible()

  // flip card back -> front
  await page.getByRole('button', { name: 'Back' }).click();
  await expect(page.getByRole('heading', { name: 'Spin Me!' })).toBeVisible();
});
