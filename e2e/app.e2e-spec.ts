import { FichasPage } from './app.po';

describe('fichas App', () => {
  let page: FichasPage;

  beforeEach(() => {
    page = new FichasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
