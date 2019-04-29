import { HerosModule } from './heros.module';

describe('HerosModule', () => {
  let herosModule: HerosModule;

  beforeEach(() => {
    herosModule = new HerosModule();
  });

  it('should create an instance', () => {
    expect(herosModule).toBeTruthy();
  });
});
