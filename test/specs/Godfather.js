import HomePage from "../pageobjects/home.page";
import Top250Page from "../pageobjects/top250.page";

describe("Verify the correct display of the top 250 page", () => {
    it("Verify Godfather is in 2nd place with a 9.1 rating", async () => {
        await HomePage.open();
        await HomePage.clickMenu();
        await HomePage.clickTop250();

        await expect(Top250Page.godFatherEntry).toBeDisplayed();
        await expect(Top250Page.godFatherPosition).toHaveText(
            "2. El padrino (1972)"
        );
        await expect(Top250Page.godFatherRating).toHaveText("9,1");
    });
});
