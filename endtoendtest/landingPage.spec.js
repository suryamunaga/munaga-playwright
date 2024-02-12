import {test,expect} from "@playwright/test"

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });
  
  test.describe("Landing Page",()=>{
    test("has Heading Text",({page})=>{
        const headerEle=page.getByTestId("headder")
        expect(headerEle).toHaveText("MY FIRST REACT APPLICATION")


        const homeEle=page.getByTestId("home")
        expect(homeEle).toHaveText("surya lover boy")
    })

  })