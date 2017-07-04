import { ShiftGenAngUIPage } from './app.po';

describe('shift-gen-ang-ui App', () => {
  let page: ShiftGenAngUIPage;

  beforeEach(() => {
    page = new ShiftGenAngUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
