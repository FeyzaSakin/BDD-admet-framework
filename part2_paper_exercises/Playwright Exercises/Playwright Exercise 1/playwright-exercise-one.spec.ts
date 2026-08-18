// playwright-exercise.spec.ts: verifies page titles at the Google and Gallaudet websites
import { test, expect } from '@playwright/test';

let debugging: boolean = false; // to debug

test('first test', async ({ page }) => {
    if(debugging){console.log("Starting Google Exercise...");}
    await page.goto('https://www.google.com/');   //  Going to Google webpage
    await page.waitForTimeout(1000);
    const tabName = await page.title(); //  Getting the tab name for the browser
    if(debugging){console.log("Checking tabName: " + tabName);}
    expect(tabName).toBe("Google");
});

test('second test', async ({ page }) => {
    if(debugging){console.log("Starting Gallaudet Exercise...");}
    await page.goto('https://gallaudet.edu/');   //  Going to Gallaudet webpage
    await page.waitForTimeout(1000);
    const tabName = await page.title(); //  Getting the tab name for the browser
    if(debugging){console.log("Checking tabName: " + tabName);}
    expect(tabName).toBe("Gallaudet University | Changing the world with a bilingual way of being");
});