import { getPostData } from "@/app/lib/posts";

const BlogPage = () => {
  // Use useNavigation instead of useRouter
  const postData = getPostData("third");

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-xl font-bold">{postData.title}</h2>
        <p className="font-light py-6">{postData.date} by Adrian Young</p>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </div>
    </main>
  );
};

export default BlogPage;
