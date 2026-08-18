// playwright-exercise-three.spec.ts: using "getByPlaceholder()", it types "New York City" in AccuWeather webpage
import { test, expect } from '@playwright/test';

let debugging: boolean = false; // to debug

test('translation test', async ({ page }) => {
    if(debugging){console.log("Starting AccuWeather Exercise...");}
    await page.goto('https://www.accuweather.com//');   //  Going to AccuWeather webpage
    await page.waitForTimeout(1000);
    const tabName = await page.title(); //  Getting the tab name for the browser
    if(debugging){console.log("Checking tabName: " + tabName);}
    expect(tabName).toBe("Local, National, & Global Daily Weather Forecast | AccuWeather");
    await page.getByPlaceholder('Search').fill('New York City');
    await page.waitForTimeout(1000);await page.waitForTimeout(1000);
});