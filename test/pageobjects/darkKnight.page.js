class DarkKnightPage {
    get playTrailerButton() {
        return $(
            "//*[@id='__next']/main/div/section[1]/section/div[3]/section/section/div[3]/div[1]/div/div[2]/div[2]/a/div[3]"
        );
    }
    get playButton() {
        return $(
            "/html[1]/body[1]/div[1]/div[3]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[9]/div[4]/div[2]/div[1]"
        );
    }

    async clickPlayTrailerButton() {
        await this.playTrailerButton.waitForExist();
        await this.playTrailerButton.click();
    }
    async clickPlayButton() {
        await this.playButton.waitForExist();
        await this.playButton.click();
    }
}
export default new DarkKnightPage();
