import { getClient, logger } from '@test/init';
import { printTweet } from '@test/util';

test('getTweetDetail', async () => {
  logger.log('getTweetDetail');
  const client = await getClient();
  const response = await client.getTweetApi().getTweetDetail({ focalTweetId: '1349129669258448897' });
  response.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getHomeTimeline', async () => {
  logger.log('getHomeTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getHomeTimeline();
  response.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getHomeLatestTimeline', async () => {
  logger.log('getHomeLatestTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getHomeLatestTimeline();
  response.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getListLatestTweetsTimeline', async () => {
  logger.log('getListLatestTweetsTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getListLatestTweetsTimeline({ listId: '1141162794290520064' });
  response.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getUserTweets', async () => {
  logger.log('getUserTweets');
  const client = await getClient();
  const response = await client.getTweetApi().getUserTweets({ userId: '44196397' });
  response.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getUserTweetsAndReplies', async () => {
  logger.log('getUserTweetsAndReplies');
  const client = await getClient();
  const response = await client.getTweetApi().getUserTweetsAndReplies({ userId: '44196397' });
  response.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getUserMedia', async () => {
  logger.log('getUserMedia');
  const client = await getClient();
  const response = await client.getTweetApi().getUserMedia({ userId: '44196397' });
  response.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getLikes', async () => {
  logger.log('getLikes');
  const client = await getClient();
  const response = await client.getTweetApi().getLikes({ userId: '44196397' });
  response.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getBookmarks', async () => {
  logger.log('getBookmarks');
  const client = await getClient();
  const response = await client.getTweetApi().getBookmarks();
  response.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});
