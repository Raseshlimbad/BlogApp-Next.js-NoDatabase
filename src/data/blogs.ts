export interface Blog {
    id: string;
    title: string;
    content: string;
  }
  
  export const blogs: Blog[] = [
    { id: "1", title: "First Blog", content: "This is the content of the first blog." },
    { id: "2", title: "Second Blog", content: "This is the content of the second blog." },
  ];
  