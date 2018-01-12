import { FirestoreCrudPage } from './app.po';

describe('firestore-crud App', function() {
  let page: FirestoreCrudPage;

  beforeEach(() => {
    page = new FirestoreCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
