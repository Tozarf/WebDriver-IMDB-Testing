class DarkKnightPage {
    get playTrailerButton() {
        return $("//span[contains(text(),'Play trailer')]");
    }
    get videoContainer() {
        return $("//video[@class='jw-video jw-reset']");
    }

    async clickPlayTrailerButton() {
        await this.playTrailerButton.waitForExist();
        await this.playTrailerButton.click();
    }
    async clickVideoContainer() {
        await this.playButton.waitForExist();
        await this.playButton.click();
    }
}
export default new DarkKnightPage();
