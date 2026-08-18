// playwright-exercise-two.spec.ts: copies "Ciao." after translating "Hello." in English on Google Translate
import { test, expect } from '@playwright/test';

let debugging: boolean = false; // to debug

test('translation test', async ({ page }) => {
    if(debugging){console.log("Starting Google Translate Exercise...");}
    await page.goto('https://translate.google.com/');   //  Going to Google Translation webpage
    await page.waitForTimeout(1000);
    const tabName = await page.title(); //  Getting the tab name for the browser
    if(debugging){console.log("Checking tabName: " + tabName);}
    expect(tabName).toBe("Google Translate");
    await page.getByRole('button', { name: 'More source languages' }).click();
    await page.getByRole('textbox', { name: 'Search languages' }).fill('English');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Search languages' }).press('Enter');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'More target languages' }).click();
    await page.getByRole('textbox', { name: 'Search languages' }).fill('Italian');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Search languages' }).press('Enter');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox', { name: 'Source text' }).click();
    await page.getByRole('combobox', { name: 'Source text' }).fill('Hello.');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox', { name: 'Source text' }).click();
    await page.getByText('Ciao.').nth(3).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Copy translation' }).click();
    await page.waitForTimeout(1000);
});