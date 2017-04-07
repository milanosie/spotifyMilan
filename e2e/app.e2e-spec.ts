import { MilanSpotifyPage } from './app.po';

describe('milan-spotify App', () => {
  let page: MilanSpotifyPage;

  beforeEach(() => {
    page = new MilanSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
