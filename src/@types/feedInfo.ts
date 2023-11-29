export type FeedInfo = {
  id: string;
  content: string;
  writer: {
    name: string;
    uid: string;
  };
  imageUrl: string;
  likeHistory: string[]; // 누가 '좋아요'를 눌렀는지
  createdAt: number;
};
