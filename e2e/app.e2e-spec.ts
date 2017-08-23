import { Broadspire4Ang4Page } from './app.po';

describe('broadspire4-ang4 App', () => {
  let page: Broadspire4Ang4Page;

  beforeEach(() => {
    page = new Broadspire4Ang4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
