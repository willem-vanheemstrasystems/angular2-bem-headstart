import { StyledAppPage } from './app.po';

describe('styled-app App', () => {
  let page: StyledAppPage;

  beforeEach(() => {
    page = new StyledAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
