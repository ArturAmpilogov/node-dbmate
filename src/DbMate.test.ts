import DbMate from './DbMate';

test('up-down-drop', async () => {
  const dbmate = new DbMate('postgres://postgres@postgres:5432/test-db?sslmode=disable');
  await dbmate.up();
  await dbmate.down();
  await dbmate.drop();
});
