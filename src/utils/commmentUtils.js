export const commentDetails = (comment) => {
  if (!comment) return [];

  return [
    { label: "ID", value: comment.id },
    { label: "Name", value: comment.name },
    { label: "Email", value: comment.email },
    { label: "Body", value: comment.body },
  ];
};

