import {test,expect} from"@playwright/test"

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:3000/")
})

test.describe("Flow",()=>{
    test("menu items click",async({page})=>{


        await page.waitForTimeout(2000)
        await page.getByRole("link",{name:'ABOUT'}).click()
        await page.waitForTimeout(2000)
        const aboutEle=page.getByTestId("about")
        expect(aboutEle).toHaveText("gayathri loves surya")

        
        await page.getByRole("link",{name:'CONTACT'}).click()
        await page.waitForTimeout(2000)
        const contactEle=page.getByTestId("caontact")
        expect(contactEle).toHaveText("surya good boy")

        await page.waitForTimeout(2000)
        await page.getByRole("link",{name:'HOME'}).click()
        await page.waitForTimeout(2000)
        const homeEle=page.getByTestId("home")
        expect(homeEle).toHaveText("surya lover boy ")


        



    })
})