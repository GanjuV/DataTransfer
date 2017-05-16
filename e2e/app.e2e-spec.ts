import { DatatransferPage } from './app.po';

describe('datatransfer App', function() {
  let page: DatatransferPage;

  beforeEach(() => {
    page = new DatatransferPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
