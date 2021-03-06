import DarkKnightPage from "../pageobjects/darkKnight.page";
import homePage from "../pageobjects/home.page";
import top250Page from "../pageobjects/top250.page";

describe("Verify the correct display of The Dark Knight", () => {
    it("Validate that the jwplayer is displayed and the state is 'idle' ", async () => {
        await homePage.open();
        await homePage.clickMenu();
        await homePage.clickTop250();
        await top250Page.clickDarkKnight();

        // await DarkKnightPage.clickPlayTrailerButton();

        // await DarkKnightPage.timeLineController.waitForExist()

        const playerState = await browser.execute(() => {
            return jwplayer().getState();
        });

        await expect(playerState).toEqual("buffering");
    });
    it("Validate that the jwplayer is displayed and the state is 'playing'", async () => {
        await homePage.open();
        await homePage.submitSearch("The Dark Knight");
        await DarkKnightPage.clickPlayTrailerButton();
        await DarkKnightPage.timeLineController.waitForExist();
        const playerSate = await browser.execute(() => {
            return jwplayer().getState();
        });
        await expect(playerSate).toEqual("playing");
    });
});
