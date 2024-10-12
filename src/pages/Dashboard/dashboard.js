import React, { useEffect, useState } from "react";
import { useAuth } from "contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "api/commentsService";
import CommentsList from "components/CommentsList/CommentsList";
import LoadingSpinner from "components/Common/Spinner";
import { checkUserAuthentication } from "utils/helpers";
import { loadMoreComments } from "utils/helpers";
import texts from "../../assets/texts.json"

const DashboardPage = () => {
  const [currentCount, setCurrentCount] = useState(6);
  const { user } = useAuth();
  const history = useHistory();

  // Fetch comments
  const {
    data: comments,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  useEffect(() => {
    checkUserAuthentication(user, history);
  }, [user, history]);

  const loadMore = () => {
    loadMoreComments(currentCount, setCurrentCount);
  };

  return (
    <div>
      <p>{texts.welcomeMessage.replace("{email}", user?.email)}</p>
      <div>
        {isLoading && <LoadingSpinner />}
        {isError && (
          <div>
            {texts.errorLoadingComments.replace("{error}", error.message)}
          </div>
        )}
        {comments && !isLoading && !isError && (
          <CommentsList
            comments={comments.slice(0, currentCount)}
            loadMore={loadMore}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
