/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    // openTop250() {
    //     return browser.url("https://www.imdb.com/chart/top/?ref_=nv_mv_250");
    // }
    open() {
        return browser.url("https://www.imdb.com/");
    }
}
