// playwright-exercise-four.spec.ts: using "locator()", it chooses "News" for the drop down option
import { test, expect } from '@playwright/test';

let debugging: boolean = false; // to debug

test('drop down test', async ({ page }) => {
    if(debugging){console.log("Starting AccuWeather Exercise...");}
    await page.goto('https://www.accuweather.com//');   //  Going to AccuWeather webpage
    await page.waitForTimeout(1000);
    const tabName = await page.title(); //  Getting the tab name for the browser
    if(debugging){console.log("Checking tabName: " + tabName);}
    expect(tabName).toBe("Local, National, & Global Daily Weather Forecast | AccuWeather");
    await page.locator('svg').filter({ hasText: 'Chevron down' }).click();  // Clicks on the drop down with options next to the search bar. Options: Location, News, Videos
    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'News' }).nth(1).click(); //  Clicks on the "News" Option
    await page.waitForTimeout(1000);await page.waitForTimeout(1000);await page.waitForTimeout(1000);
});