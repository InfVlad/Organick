import type { FC } from 'react';

interface PostProps {
  params: {
    post: string;
  };
}

const Post: FC<PostProps> = ({ params }) => {
  return <div>{`Post  ${params.post}`}</div>;
};

export default Post;
